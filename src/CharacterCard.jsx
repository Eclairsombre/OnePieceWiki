import React from "react";
import { useEffect } from "react";

function CharacterCard(characters) {
  return (
    <div>
      <h1>Character</h1>
      <p>This is the character page.</p>
      <h2>Character</h2>
      {characters.characters.map((character) => (
        <div>
          <h3>{character.name}</h3>
          <p>{character.description}</p>
          <img
            src={"src/assets/pictureCharacters/" + character.id + ".png"}
            alt={character.name}
          />
        </div>
      ))}
    </div>
  );
}

export default CharacterCard;
