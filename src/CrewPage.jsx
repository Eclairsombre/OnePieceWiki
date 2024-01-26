import React from "react";
import Header from "./Header";
import "./CharacterPage.css";

function CrewPage({ crew, setSelectedCrew }) {
  return (
    <div className="character-page-container">
      <Header />
      <button onClick={() => setSelectedCrew([])} className="BackButton">
        Back
      </button>
      <div className="CharacterPage">
        <div className="infos">
          <div className="presentation">
            <h1 className="CharacterName">
              {crew.name} / {crew.roman_name}
            </h1>
            <img
              src={"src/assets/pictureCrew/" + crew.id + ".png"}
              alt={crew.name}
              className="CharacterImage"
            />
          </div>
          <div className="assets">
            <p>Total Prime : {crew.total_prime} </p>
            <p>Status : {crew.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrewPage;
