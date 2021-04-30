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
      beers: [],
      styles:['Witbeer','Weizen','Stout','Лагер']
    };
    this.beerBorn = this.beerBorn.bind(this);
    this.filterStyle = this.filterStyle.bind(this);
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
  filterStyle(style){
    fetch(`http://localhost:1234/beer/style?style=${style}`)
    .then(res=>res.json())
    .then(res=>{
      console.log(res);
      if (res.length) {
        this.beerBorn(res);
      }
    });
    console.log(style);
  }
  testF(res){
    console.log(res);
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
            <Beer styles = {this.state.styles} beers = {this.state.beers} filterStyle = {this.filterStyle} />
          </Route>
        </Switch>
        <Modal />
      </div>
    );
  }
}

export default MainContent;
