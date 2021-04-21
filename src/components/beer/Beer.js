import React from 'react';
import BeerCard from './BeerCard';
class Beer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
    this.beerBorn = this.beerBorn.bind(this);
  }
  componentDidMount(){
    console.log(this.state.beers);
    fetch('http://localhost:1234/beer')
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      if (res.length) {
        this.beerBorn(res);
      }
    });
  }
  beerBorn(arr){
    this.setState(state => {
      return {beers : arr};
    });
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
            this.state.beers.map((item) =>
              <BeerCard key={item.name} item={item} />
            )
          }
        </div>
      </div>
    );
  }
}

export default Beer;
