import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Header from "./Header";
import CharacterCard from "./CharacterCard";
import CharacterPage from "./CharacterPage";
import FruitCard from "./FruitCard";
import FruitPage from "./FruitPage";

function HomePage() {
  const [arc, setArc] = useState([]);
  const [fruit, setFruit] = useState([]);
  const [tome, setTome] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [movie, setMovie] = useState([]);
  const [haki, setHaki] = useState([]);
  const [crew, setCrew] = useState([]);
  const [character, setCharacter] = useState([]);
  const [boat, setBoat] = useState([]);
  const [locate, setLocate] = useState([]);
  const [researchBar, setResearchBar] = useState("");

  const [selectCharacter, setSelectCharacter] = useState([]);
  const [selectFruit, setSelectFruit] = useState([]);

  getCharacters(setCharacter);
  getCrew(setCrew);
  getHaki(setHaki);
  getMovie(setMovie);
  getBoat(setBoat);
  getArc(setArc);
  getFruit(setFruit);
  getTome(setTome);
  getEpisode(setEpisode);
  getLocate(setLocate);

  const handleInputChange = (event) => {
    setResearchBar(event.target.value);
  };

  return (
    <div>
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
    </div>
  );
}

function getCharacters(setCharacter) {
  useEffect(() => {
    var requestURL = "https://api.api-onepiece.com/v2/characters/fr";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
      const temp = request.response;
      setCharacter(temp);
    };
  }, []);
}

function getCrew(setCrew) {
  useEffect(() => {
    var requestURL = "https://api.api-onepiece.com/v2/crews/fr";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
      const temp = request.response;
      setCrew(temp);
    };
  }, []);
}

function getHaki(setHaki) {
  useEffect(() => {
    var requestURL = "https://api.api-onepiece.com/v2/hakis/fr";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
      const temp = request.response;
      setHaki(temp);
    };
  }, []);
}

function getMovie(setMovie) {
  useEffect(() => {
    var requestURL = "https://api.api-onepiece.com/v2/movies/fr";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
      const temp = request.response;
      setMovie(temp);
    };
  }, []);
}

function getBoat(setBoat) {
  useEffect(() => {
    var requestURL = "https://api.api-onepiece.com/v2/boats/fr";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
      const temp = request.response;
      setBoat(temp);
    };
  }, []);
}

function getArc(setArc) {
  useEffect(() => {
    var requestURL = "https://api.api-onepiece.com/v2/arcs/fr";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
      const temp = request.response;
      setArc(temp);
    };
  }, []);
}

function getFruit(setFruit) {
  useEffect(() => {
    var requestURL = "https://api.api-onepiece.com/v2/fruits/fr";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
      const temp = request.response;
      setFruit(temp);
    };
  }, []);
}

function getTome(setTome) {
  useEffect(() => {
    var requestURL = "https://api.api-onepiece.com/v2/tomes/fr";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
      const temp = request.response;
      setTome(temp);
    };
  }, []);
}

function getEpisode(setEpisode) {
  useEffect(() => {
    var requestURL = "https://api.api-onepiece.com/v2/episodes/fr";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
      const temp = request.response;
      setEpisode(temp);
    };
  }, []);
}

function getLocate(setLocate) {
  useEffect(() => {
    var requestURL = "https://api.api-onepiece.com/v2/locates/fr";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
      const temp = request.response;
      setLocate(temp);
    };
  }, []);
}

export default HomePage;
