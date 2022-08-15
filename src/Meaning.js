import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h6>{props.meaning.partOfSpeech}</h6>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>
              Example: <em>{definition.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
