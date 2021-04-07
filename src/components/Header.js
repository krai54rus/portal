import React from 'react';
import {
  Link,
} from "react-router-dom";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render(){
    return (
      <div className="header">
        <header className="header-container">
          
          <div className="header-links">
            <div className="header-link">
              <Link to="/profile">Profile</Link>
            </div>
            <div className="header-link">
              <Link to="/beer">Beer</Link>
            </div>
            
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
