import React from "react";
import Header from "./Header";
import "./CharacterPage.css";
import ShowDevilFruit from "./ShowDevilFruit";

function CharacterPage({ character, setSelectCharacter }) {
  return (
    <div className="character-page-container">
      <Header />
      <button onClick={() => setSelectCharacter([])} className="BackButton">
        Back
      </button>
      <div className="CharacterPage">
        <div className="infos">
          <div className="presentation">
            <h1 className="CharacterName">{character.name}</h1>
            <img
              src={"src/assets/pictureCharacters/" + character.id + ".png"}
              alt={character.name}
              className="CharacterImage"
            />
          </div>
          <div className="assets">
            <p className="pAge">Age : {character.age}</p>
            <p className="pSize">Height : {character.size}</p>
            <p className="pBounty">Bounty : {character.bounty}</p>
            <p className="pJob">Role : {character.job}</p>
            <p className="pStatus">Status : {character.status}</p>
          </div>
        </div>

        {character.fruit && <ShowDevilFruit devilFruit={character.fruit} />}
      </div>
    </div>
  );
}

export default CharacterPage;
