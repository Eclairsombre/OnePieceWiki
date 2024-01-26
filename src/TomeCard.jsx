import React from "react";

import "./CharacterCard.css";

function TomeCard({ tomes, researchBar, setSelectedTome }) {
  return (
    <div>
      <div className="CardList">
        {tomes.map((tome) =>
          tome.title.toLowerCase().includes(researchBar.toLowerCase()) ||
          researchBar === "" ? (
            <div
              className="Card"
              onClick={() => setSelectedTome(tome)}
              key={tome.id}
            >
              <h2 className="CardName">{tome.title}</h2>

              <img
                className="CardImage"
                src={"src/assets/pictureTome/" + tome.id + ".png"}
                alt={tome.title}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default TomeCard;
