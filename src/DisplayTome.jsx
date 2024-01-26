import React, { useState } from "react";
import Header from "./Header";
import TomeCard from "./TomeCard";
import TomePage from "./TomePage";
import { getTome } from "./HomePage";

const DisplayTome = () => {
  const [tome, setTome] = useState([]);
  const [selectedTome, setSelectedTome] = useState([]);
  const [researchBar, setResearchBar] = useState("");

  getTome(setTome);

  const handleInputChange = (event) => {
    setResearchBar(event.target.value);
  };

  return (
    <div>
      {selectedTome.length != 0 ? (
        <TomePage tome={selectedTome} setSelectedTome={setSelectedTome} />
      ) : (
        <div>
          <Header />
          <h1>Tomes</h1>

          <input
            type="text"
            className="textInput"
            value={researchBar}
            onChange={handleInputChange}
            placeholder="Search a tome here"
          />
          <TomeCard
            tomes={tome}
            researchBar={researchBar}
            setSelectedTome={setSelectedTome}
          />
        </div>
      )}
    </div>
  );
};

export default DisplayTome;
