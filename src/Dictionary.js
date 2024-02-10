import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("hello");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "9aa8dte54640eadb9ed0cb3f8cboafa2";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>What word do you want to look up?</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="hint">
            suggested words: happy, yoga, flowers, sunrise...
          </div>
          <Results results={results} />
        </section>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
