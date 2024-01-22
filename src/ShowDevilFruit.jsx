import React from "react";

function ShowDevilFruit({ devilFruit }) {
  return (
    <div>
      <h2>Devil Fruit</h2>
      <p>
        {devilFruit.name} / {devilFruit.roman_name}
      </p>
      <p>{devilFruit.description}</p>
      <img src={devilFruit.filename} alt={devilFruit.name} />
    </div>
  );
}

export default ShowDevilFruit;
