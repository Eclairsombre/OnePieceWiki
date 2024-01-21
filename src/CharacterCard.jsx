import React from "react";

import "./CharacterCard.css";

function CharacterCard(props) {
  return (
    <div>
      <div className="CardList">
        {props.characters.map((character) => (
          <div className="Card" key={character.id}>
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
