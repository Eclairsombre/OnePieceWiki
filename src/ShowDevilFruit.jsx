import React from "react";
import "./ShowDevilFruit.css";

function ShowDevilFruit({ devilFruit }) {
  return (
    <div className="dfContainer ">
      <div className="dfMainInfos">
        <h2>Devil Fruit</h2>
        <p>
          {devilFruit.name} / {devilFruit.roman_name}
        </p>
        <img src={devilFruit.filename} alt={devilFruit.name} />
      </div>
      <p className="dfDesc">{devilFruit.description}</p>
    </div>
  );
}

export default ShowDevilFruit;
