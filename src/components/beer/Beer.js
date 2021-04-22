import React, { useState, useEffect } from 'react';
import BeerCard from './BeerCard';
function Beer (props){
  // function syncWithServer() {
  //   console.log(props.beers);
  // }
  // useEffect(() => {
  //   syncWithServer();
  // }, [props.beers]);

    return (
      <div className="beer-wrap">
        <div className="beer-header">
          <div className="beer-header-title">Лагеры</div>
          <div className="beer-header-title">Стауты</div>
          <div className="beer-header-title">IPA</div>
          <div className="beer-header-title">Эли</div>
        </div>

        <div className="beer-content">
          {
            props.beers.map((item) =>
              <BeerCard key={item.name} item={item} />
            )
          }
        </div>
      </div>
    );
}

export default Beer;
