import React from "react";
import { useEffect } from "react";

import "./CharacterCard.css";

function CharacterCard(characters) {
  return (
    <div>
      <div className="CardList">
        {characters.characters.map((character) => (
          <div className="Card">
            <h3 className="CardName">{character.name}</h3>
            <p>{character.description}</p>
            <img
              className="CardImage"
              src={"src/assets/pictureCharacters/" + character.id + ".png"}
              alt={character.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterCard;
