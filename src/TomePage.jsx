import React from "react";
import Header from "./Header";
import "./CharacterPage.css";

function TomePage({ tome, setSelectedTome }) {
  let date = tome.tome_french_date_publish;
  let date2 = tome.tome_japan_date_publish;
  return (
    <div className="character-page-container">
      <Header />
      <button onClick={() => setSelectedTome([])} className="BackButton">
        Back
      </button>
      <div className="CharacterPage">
        <div className="infos">
          <div className="presentation">
            <h1 className="CharacterName">{tome.title}</h1>
            <img
              src={"src/assets/pictureTome/" + tome.id + ".png"}
              alt={tome.title}
              className="CharacterImage TomeImage"
            />
          </div>
          <div className="assets">
            <p>Tome number : {tome.tome_number}</p>
            <p>Publish date in Japan : {date2.slice(8,10) + "/" + date2.slice(5,7) + "/" + date2.slice(0,4)}</p>
            <p>Publish date in France : {date.slice(8,10) + "/" + date.slice(5,7) + "/" + date.slice(0,4)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TomePage;
