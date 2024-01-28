import React from "react";

import "./FruitCard.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function HakiCard({ hakis, researchBar, setSelectedHaki }) {
  return (
    <div>
      <div className="CardList">
        {hakis.map((haki) =>
          haki.name.toLowerCase().includes(researchBar.toLowerCase()) ||
          researchBar === "" ? (
            <div
              className="Card"
              onClick={() => setSelectedHaki(haki)}
              key={haki.id}
            >
              <h3 className="CardName">
                {haki.name} / {haki.roman_name}
              </h3>

              <LazyLoadImage
                className="CardImage"
                src={"src/assets/pictureHaki/" + haki.id + ".png"}
                alt={haki.name}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default HakiCard;
