import React from "react";

import "./CharacterCard.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function LocateCard({ locates, researchBar, setSelectedLocate }) {
  return (
    <div>
      <div className="CardList">
        {locates.map((locate) =>
          locate.name.toLowerCase().includes(researchBar.toLowerCase()) ||
          researchBar === "" ? (
            <div
              className="Card"
              onClick={() => setSelectedLocate(locate)}
              key={locate.id}
            >
              <h2 className="CardName">
                {locate.name} {locate.roman_name && `/ ${locate.roman_name}`}
              </h2>

              <LazyLoadImage
                className="CardImage"
                src={"src/assets/pictureLocates/" + locate.id + ".png"}
                alt={locate.name}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default LocateCard;
