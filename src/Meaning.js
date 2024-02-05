import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definition}
        </p>
        <p>
          <strong>Example: </strong>
          {props.meaning.example}
        </p>
      </section>
    </div>
  );
}
