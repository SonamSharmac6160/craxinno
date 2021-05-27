// @flow

import React, { Component } from "react";
import { Link } from "react-router-dom";

/*
 TYPES
*/
type Props = {};
class Nav extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
   
  }

  render() {

    return (


      <header id="header" className="fixed-top btm-shadow" style={{ position: 'fixed' }}>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to={'/'} className="logo mr-2 mr-md-3">
            Craxinno
          </Link>
        </nav>

      </header>
    );
  }
}

export default Nav;