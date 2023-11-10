import React, { Component } from 'react';
import logo from '/logo.svg';
import '/App.css';
import { withStyles } from '@material-ui/core/styles';
import Loggo from '..pages/loggo.jsx';
  class Appi extends Component {
    render() {
      return (
        <div className="App">
          <header CLassName="App-header" className={this.props.classes.sombra}>
            <img src={logo} className="App-Logo" alt="logo" />
            <p>
            </p>
          </header>
        </div>
      );
    }
  }
export default Appi;


