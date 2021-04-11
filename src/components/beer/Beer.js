import React from 'react';
import BeerCard from './BeerCard';
class Beer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          name: "Flip Flop",
          price: "208"
        },
        {
          name: "Milk Stout",
          price: "208"
        }
      ]
    };
  }
  
  render(){
    // const cards = this.state.cards.map((item) =>
    //   <BeerCard key={item.name} item={item} />
    // );
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
            this.state.cards.map((item) =>
              <BeerCard key={item.name} item={item} />
            )
          }
        </div>
      </div>
    );
  }
}

export default Beer;
