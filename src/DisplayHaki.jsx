import React, { useState } from "react";
import Header from "./Header";
import HakiCard from "./HakiCard";
import HakiPage from "./HakiPage";
import { getHaki } from "./HomePage";
import ChargingWeel from "./ChargingWeel";

const DisplayHaki = () => {
  const [haki, setHaki] = useState([]);
  const [selectedHaki, setSelectedHaki] = useState([]);
  const [researchBar, setResearchBar] = useState("");

  getHaki(setHaki);

  const handleInputChange = (event) => {
    setResearchBar(event.target.value);
  };

  return (
    <div>
      {selectedHaki.length != 0 ? (
        <HakiPage haki={selectedHaki} setSelectedHaki={setSelectedHaki} />
      ) : (
        <div>
          <Header />
          <h1>Haki</h1>

          <input
            type="text"
            className="textInput"
            value={researchBar}
            onChange={handleInputChange}
            placeholder="Search an Haki here"
          />
          {haki.length == 0 ? (
            <ChargingWeel />
          ) : (
            <HakiCard
              hakis={haki}
              researchBar={researchBar}
              setSelectedHaki={setSelectedHaki}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DisplayHaki;
