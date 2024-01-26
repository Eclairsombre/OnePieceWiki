import React from "react";
import Header from "./Header";
import "./CharacterPage.css";

function LocatePage({ locate, setSelectedLocate }) {
  return (
    <div className="character-page-container">
      <Header />
      <button onClick={() => setSelectedLocate([])} className="BackButton">
        Back
      </button>
      <div className="CharacterPage">
        <div className="infos">
          <div className="presentation">
            <h1 className="CharacterName">
              {locate.name} / {locate.roman_name}
            </h1>
            <img
              src={"src/assets/pictureLocates/" + locate.id + ".png"}
              alt={locate.name}
              className="CharacterImage"
            />
          </div>
          <div className="assets">
            <p>Sea Name : {locate.sea_name}</p>
            <p>{locate.region_name && `Region : ${locate.region_name}`}</p>
            <p>
              {locate.affiliation_name &&
                `Affiliation : ${locate.affiliation_name}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocatePage;
