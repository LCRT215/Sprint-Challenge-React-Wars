import React from "react";
import "./StarWars.css";

//Setting up how the character info is displayed on the page.
//Adding props so the data can be applied in App.js
const CharacterInfo = props => {
  return (
    <div className="Container">
      {props.data.map(character => {
        return (
          <>
            <h1>Name: {character.name}</h1>
            <p>Species: {character.species}</p>
            <p>Homeworld: {character.homeworld}</p>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Weight: {character.mass}</p>
          </>
        );
      })}
    </div>
  );
};

export default CharacterInfo;
