import React from "react";

import "./CharacterCard.css";

function CrewCard({ crews, researchBar, setSelectedCrew }) {
  return (
    <div>
      <div className="CardList">
        {crews.map((crew) =>
          crew.name.toLowerCase().includes(researchBar.toLowerCase()) ||
          researchBar === "" ? (
            <div
              className="Card"
              onClick={() => setSelectedCrew(crew)}
              key={crew.id}
            >
              <h2 className="CardName">
                {crew.name} {crew.roman_name && `/ ${crew.roman_name}`}
              </h2>

              <img
                className="CardImage"
                src={"src/assets/pictureCrew/" + crew.id + ".png"}
                alt={crew.name}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default CrewCard;
