import React from "react";
import Header from "./Header";
import "./CharacterPage.css";

function HakiPage({ haki, setSelectedHaki }) {
  return (
    <div className="character-page-container">
      <Header />
      <button onClick={() => setSelectedHaki([])} className="BackButton">
        Back
      </button>
      <div className="CharacterPage">
        <div className="infos">
          <div className="presentation">
            <h1 className="CharacterName">
              {haki.name} / {haki.roman_name}
            </h1>
            <img
              src={"src/assets/pictureHaki/" + haki.id + ".png"}
              alt={haki.name}
              className="CharacterImage"
            />
          </div>
          <div className="assets">
            <p>{haki.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HakiPage;
