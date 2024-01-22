import React from "react";
import Header from "./Header";

function FruitPage({ selectFruit, setSelectFruit }) {
  return (
    <div>
      <Header />
      <div className="CharacterPage">
        <button onClick={() => setSelectFruit([])} className="BackButton">
          Back
        </button>
        <img
          src={selectFruit.filename}
          alt={selectFruit.name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "src/assets/pictureFruits/0.png";
          }}
        />
        <h1>{selectFruit.name}</h1>
        <h2>{selectFruit.roman_name}</h2>
        <h3>{selectFruit.type}</h3>
        <p>{selectFruit.description}</p>
      </div>
    </div>
  );
}

export default FruitPage;
