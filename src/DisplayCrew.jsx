import React, { useState } from "react";
import Header from "./Header";
import FruitCard from "./FruitCard";
import CrewCard from "./CrewCard";
import CrewPage from "./CrewPage";
import { getCrew } from "./HomePage";

const DisplayCrews = () => {
  const [crew, setCrew] = useState([]);
  const [selectedCrew, setSelectedCrew] = useState([]);
  const [researchBar, setResearchBar] = useState("");

  getCrew(setCrew);

  const handleInputChange = (event) => {
    setResearchBar(event.target.value);
  };

  return (
    <div>
      {selectedCrew.length != 0 ? (
        <CrewPage crew={selectedCrew} setSelectedCrew={setSelectedCrew} />
      ) : (
        <div>
          <Header />
          <h1>Crews</h1>

          <input
            type="text"
            className="textInput"
            value={researchBar}
            onChange={handleInputChange}
            placeholder="Search a Crew here"
          />
          <CrewCard
            crews={crew}
            researchBar={researchBar}
            setSelectedCrew={setSelectedCrew}
          />
        </div>
      )}
    </div>
  );
};

export default DisplayCrews;
