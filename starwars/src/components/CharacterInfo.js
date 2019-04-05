import React from "react";
import "./StarWars.css";

//Setting up how the character info is displayed on the page.
//Adding props so the data can be applied in App.js
const CharacterInfo = props => {
  return (
    <div className="container">
      {props.data.map(character => {
        // console.log(character);
        return (
          <div key={character} className="characterCard">
            <h1 className="name">{character.name}</h1>
            <div className="stats">
              <p>
                <strong>Gender:</strong> {character.gender}
              </p>
              <p>
                <strong>Height:</strong> {character.height} inches
              </p>
              <p>
                <strong>Weight:</strong> {character.mass} lbs
              </p>
              <p>
                <strong>Eye Color: </strong>
                {character.eye_color}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterInfo;
