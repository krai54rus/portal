import React from 'react';
class BeerCard extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render(){
    return (
          <div className="beer-card">
            <div className="beer-card_intro">
              <div className="beer-card-img">
                <img src="../../assets/img/flipflop.jpg" alt=""/>
              </div>
              <div className="beer-card-name">
                <span>{this.props.name}</span>
              </div>
            </div>
            <div className="beer-card_info">
              <div className="beer-card-chars">
                <div className="beer-abv">
                  <span>ABV: 5.6 %</span>
                </div>
                <div className="beer-abv">
                  <span>OG: 15 %</span>
                </div>
                <div className="beer-abv">
                  <span>IBU: 8</span>
                </div>
              </div>
              <div className="beer-card-comment">
                <span>Оч вкусно елки палки</span>
              </div>
            </div>
          </div>
    );
  }
}

export default BeerCard;
