import React from "react";
import Header from "./Header";
import "./CharacterPage.css";
import ShowDevilFruit from "./ShowDevilFruit";

function CharacterPage({ character, setSelectCharacter }) {
  return (
    <div>
      <Header />
      <div className="CharacterPage">
        <button onClick={() => setSelectCharacter([])} className="BackButton">
          Back
        </button>
        <h1>{character.name}</h1>
        <p>{character.description}</p>
        <img
          src={"src/assets/pictureCharacters/" + character.id + ".png"}
          alt={character.name}
        />
        <p>Age : {character.age}</p>
        <p>Height : {character.size}</p>
        <p>Bounty : {character.bounty}</p>
        <p>Role : {character.job}</p>
        <p>Status : {character.status}</p>

        {character.fruit && <ShowDevilFruit devilFruit={character.fruit} />}
      </div>
    </div>
  );
}

export default CharacterPage;
