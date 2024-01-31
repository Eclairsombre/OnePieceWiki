import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import Header from "./Header";
import MainPage from "./MainPage";

function HomePage() {
  /*
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

  */

  return (
    <div>
      <Header />
      <MainPage />
    </div>
  );
}

export function getCharacters(setCharacter) {
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

export function getCrew(setCrew) {
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

export function getHaki(setHaki) {
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

export function getMovie(setMovie) {
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

export function getBoat(setBoat) {
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

export function getArc(setArc) {
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

export function getFruit(setFruit) {
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

export function getTome(setTome) {
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

export function getEpisode(setEpisode) {
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

export function getLocate(setLocate) {
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
