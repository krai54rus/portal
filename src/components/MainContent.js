import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Beer from './beer/Beer.js';
import Profile from './profile/Profile.js';
import Modal from './global/Modal';
class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
    this.beerBorn = this.beerBorn.bind(this);
  }
  componentDidMount(){
    fetch('http://localhost:1234/beer')
    .then(res=>res.json())
    .then(res=>{
      if (res.length) {
        this.beerBorn(res);
      }
    });
  }
  beerBorn(arr){
    console.log(arr);
    this.setState(state => {
      return {beers : arr};
    });
  }
  render(){
    return (
      <div className="content-wrap">
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Beer beers={this.state.beers} />
          </Route>
        </Switch>
        <Modal />
      </div>
    );
  }
}

export default MainContent;
