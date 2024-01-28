import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

import "./CharacterCard.css";

function CharacterCard({ characters, researchBar, setSelectCharacter }) {
  const [displayCharacters, setDisplayCharacters] = useState([]);

  useEffect(() => {
    // Afficher d'abord les 10 premiers personnages
    setDisplayCharacters(characters.slice(0, 10));

    // Ensuite, après un délai, afficher le reste
    const timer = setTimeout(() => {
      setDisplayCharacters(characters);
    }, 500); // ajustez le délai selon vos besoins

    // Nettoyer le timer lors du démontage du composant
    return () => clearTimeout(timer);
  }, [characters]);

  return (
    <div>
      <div className="CardList">
        {displayCharacters.map((character) =>
          character.name.toLowerCase().includes(researchBar.toLowerCase()) ||
          researchBar === "" ? (
            <div className="Card" onClick={() => setSelectCharacter(character)} key={character.id}>
              <h3 className="CardName">{character.name}</h3>
              <LazyLoadImage
                className="CardImage"
                src={"src/assets/pictureCharacters/" + character.id + ".png"}
                alt={character.name}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default CharacterCard;