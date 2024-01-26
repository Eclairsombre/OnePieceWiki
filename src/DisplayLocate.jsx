import React, { useState } from "react";
import Header from "./Header";
import LocateCard from "./LocateCard";
import LocatePage from "./LocatePage";
import { getLocate } from "./HomePage";

const DisplayLocate = () => {
  const [locate, setLocate] = useState([]);
  const [selectedLocate, setSelectedLocate] = useState([]);
  const [researchBar, setResearchBar] = useState("");

  getLocate(setLocate);

  const handleInputChange = (event) => {
    setResearchBar(event.target.value);
  };

  return (
    <div>
      {selectedLocate.length != 0 ? (
        <LocatePage
          locate={selectedLocate}
          setSelectedLocate={setSelectedLocate}
        />
      ) : (
        <div>
          <Header />
          <h1>Locations</h1>

          <input
            type="text"
            className="textInput"
            value={researchBar}
            onChange={handleInputChange}
            placeholder="Search a location here"
          />
          <LocateCard
            locates={locate}
            researchBar={researchBar}
            setSelectedLocate={setSelectedLocate}
          />
        </div>
      )}
    </div>
  );
};

export default DisplayLocate;
