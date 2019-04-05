import React from "react";
import "./StarWars.css";

//Setting up how the character info is displayed on the page.
//Adding props so the data can be applied in App.js
const CharacterInfo = props => {
  return (
    <div className="Container">
      {props.data.map(character => {
        // console.log(character);
        return (
          <div>
            <h1>Name: {character.name}</h1>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height} inches</p>
            <p>Weight: {character.mass} lbs</p>
            <p>Eye Color: {character.eye_color}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterInfo;
