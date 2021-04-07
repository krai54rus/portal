import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Beer from './beer/Beer.js';
import Profile from './profile/Profile.js';
class MainContent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
  render(){
    return (
      <div className="content-wrap">
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/beer">
            <Beer />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default MainContent;
