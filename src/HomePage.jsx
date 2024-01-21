import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import CharacterCard from "./CharacterCard";

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

  const handleInputChange = (event) => {
    setResearchBar(event.target.value);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page.</p>
      <h2>Character</h2>
      <input
        type="text"
        className="textInput"
        value={researchBar}
        onChange={handleInputChange}
        placeholder="Search a Character here"
      />
      <CharacterCard characters={character} researchBar={researchBar} />
    </div>
  );
}

export default HomePage;
