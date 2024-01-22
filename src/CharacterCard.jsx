import React from "react";

import "./CharacterCard.css";

function CharacterCard({ characters, researchBar, setSelectCharacter }) {
  return (
    <div>
      <div className="CardList">
        {characters.map((character) =>
          character.name.toLowerCase().includes(researchBar.toLowerCase()) ||
          researchBar === "" ? (
            <div className="Card" onClick={() => setSelectCharacter(character)} key={character.id}>
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
