import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    //API doc https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h2>What are you looking up?</h2>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            autofocus={true}
          />
        </form>
        <div className="hint">suggested words: nature, world, sea</div>
      </section>
      <Results result={result} />
    </div>
  );
}
