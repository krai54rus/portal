import React from 'react';
import BeerCard from './BeerCard';
class Beer extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render(){
    return (
      <div className="beer-wrap">
        <div className="beer-header">
          <div className="beer-header-title">Лагеры</div>
          <div className="beer-header-title">Стауты</div>
          <div className="beer-header-title">IPA</div>
          <div className="beer-header-title">Эли</div>
        </div>

        <div className="beer-content">
          <BeerCard name='Flip Flop'/>
        </div>
      </div>
    );
  }
}

export default Beer;
