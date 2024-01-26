import React, { useState } from 'react';
import Header from "./Header";
import CharacterCard from "./CharacterCard";
import CharacterPage from "./CharacterPage";
import { getCharacters } from './HomePage';

const DisplayCharacters = () => {
    const [character, setCharacter] = useState([]);
    const [selectCharacter, setSelectCharacter] = useState([]);
    const [researchBar, setResearchBar] = useState("");

    getCharacters(setCharacter);

    const handleInputChange = (event) => {
        setResearchBar(event.target.value);
    };

  return (
    <div>
        {selectCharacter.length != 0 ? (
          <CharacterPage
            character={selectCharacter}
            setSelectCharacter={setSelectCharacter}
          />
        ) : (
          <div>
            <Header />
            <h1>Characters</h1>

            <input
              type="text"
              className="textInput"
              value={researchBar}
              onChange={handleInputChange}
              placeholder="Search a Character here"
            />
            <CharacterCard
              characters={character}
              researchBar={researchBar}
              setSelectCharacter={setSelectCharacter}
            />
          </div>
        )}
    </div>
  )
}

export default DisplayCharacters