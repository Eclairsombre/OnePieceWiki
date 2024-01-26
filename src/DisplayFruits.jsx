import React, { useState } from 'react';
import Header from "./Header";
import FruitCard from "./FruitCard";
import FruitPage from "./FruitPage";
import { getFruit } from './HomePage';

const DisplayFruits = () => {
    const [fruit, setFruit] = useState([]);
    const [selectFruit, setSelectFruit] = useState([]);
    const [researchBar, setResearchBar] = useState("");

    getFruit(setFruit);

    const handleInputChange = (event) => {
        setResearchBar(event.target.value);
    };

  return (
    <div>
        {selectFruit.length != 0 ? (
          <FruitPage
            selectFruit={selectFruit}
            setSelectFruit={setSelectFruit}
          />
        ) : (
          <div>
            <Header />
            <h1>Devil Fruit</h1>

            <input
              type="text"
              className="textInput"
              value={researchBar}
              onChange={handleInputChange}
              placeholder="Search a Devil Fruit here"
            />
            <FruitCard
              fruits={fruit}
              researchBar={researchBar}
              setSelectFruit={setSelectFruit}
            />
          </div>
        )}
    </div>
  )
}

export default DisplayFruits