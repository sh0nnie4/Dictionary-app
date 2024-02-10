import React from "react";
import Synonyms from "./Synonyms.js";
import Examples from "./Examples.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <p className="Definition">
          <strong>Definition: </strong>
          {props.meaning.definition}
        </p>
        <p>
          <Examples example={props.meaning.example} />
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </section>
    </div>
  );
}
