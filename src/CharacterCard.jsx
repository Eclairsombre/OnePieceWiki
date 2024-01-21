import React from "react";
import { useEffect } from "react";

import "./CharacterCard.css";

function CharacterCard({ characters, researchBar }) {
  return (
    <div>
      <h1>Character</h1>
      <p>This is the character page.</p>
      <h2>Character</h2>
      <div className="CardList">
        {characters.map((character) =>
          character.name.toLowerCase().includes(researchBar.toLowerCase()) ||
          researchBar === "" ? (
            <div className="Card">
              <h3 className="CardName">{character.name}</h3>
              <p>{character.description}</p>
              <img
                className="CardImage"
                src={"src/assets/pictureCharacters/" + character.id + ".png"}
                alt={character.name}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default CharacterCard;
