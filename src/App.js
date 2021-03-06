import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";
import Header from './components/Header';
import MainContent from './components/MainContent';

import './assets/css/main.scss';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {date: new Date()};
  // }
  render(){
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <MainContent></MainContent>
        </div>
      </Router>
    );
  }
}

export default App;
