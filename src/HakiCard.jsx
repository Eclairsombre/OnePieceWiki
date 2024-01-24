import React from "react";

import "./FruitCard.css";

function HakiCard({ hakis, researchBar, setSelectedHaki }) {
  return (
    <div>
      <div className="CardList">
        {hakis.map((haki) =>
          haki.name.toLowerCase().includes(researchBar.toLowerCase()) ||
          researchBar === "" ? (
            <div
              className="Card"
              onClick={() => setSelectedHaki(haki)}
              key={haki.id}
            >
              <h3 className="CardName">
                {haki.name} / {haki.roman_name}
              </h3>

              <img
                className="CardImage"
                src={"src/assets/pictureHaki/" + haki.id + ".png"}
                alt={haki.name}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default HakiCard;
