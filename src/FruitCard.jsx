import React from "react";

import "./FruitCard.css";

function FruitCard({ fruits, researchBar, setSelectFruit }) {
  return (
    <div>
      <div className="CardList">
        {fruits.map((fruit) =>
          fruit.name.toLowerCase().includes(researchBar.toLowerCase()) ||
          researchBar === "" ? (
            <div className="Card" onClick={() => setSelectFruit(fruit)}>
              <h3 className="CardName">
                {fruit.name} / {fruit.roman_name}
              </h3>

              <img
                className="CardImage"
                src={fruit.filename}
                alt={fruit.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "src/assets/pictureFruits/0.png";
                }}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default FruitCard;
