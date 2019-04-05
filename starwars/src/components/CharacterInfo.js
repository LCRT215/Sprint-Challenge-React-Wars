import React from "react";
import "./StarWars.css";

//Setting up how the character info is displayed on the page.
//Adding props so the data can be applied in App.js
const CharacterInfo = props => {
  return (
    <div className="container">
      <div className="card">
        <h1>Name: </h1>
        <p>Species: </p>
        <p>Homeworld: </p>
        <p>Birth Year:</p>
        <p>Gender:</p>
        <p>Height:</p>
        <p>Mass:</p>
      </div>
    </div>
  );
};

export default CharacterInfo;
