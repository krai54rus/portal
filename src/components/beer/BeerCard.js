import React, { useState, useEffect } from 'react';
import photo from '../../assets/img/weisser.jpg';
function BeerCard(props){
  const [argState,funcState] = useState(1);
  useEffect(() => {
    console.log('effect has worked');
  });
    return (
          <div className="beer-card">
            <div className="beer-card_intro">
            <div className="beer-card__img">
                <img src={photo} alt={props.item.name}/>
                {/* <img alt={props.item.name}/> */}
              </div>
            </div>
            <div className="beer-card__info">
            <div className="beer-card__name" onClick={() => funcState(argState + 1)}>
                <span>{ props.item.name}</span>
              </div>
              <div className="beer-card__chars">
                <div className="beer-abv">
                  <span>ABV: { props.item.chars.abu} %</span>
                </div>
                <div className="beer-abv">
                  <span>OG: { props.item.chars.og} %</span>
                </div>
                <div className="beer-abv">
                  <span>IBU: { props.item.chars.ibu}</span>
                </div>
              </div>
              <div className="beer-card__comment">
                <span>{ props.item.comment}</span>
              </div>
            </div>
          </div>
    );
}

export default BeerCard;
