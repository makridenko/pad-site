/* React components */
import React, { Component } from 'react';

/* Components */
import Navbar from './Navbar';
import Main from './Main';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  };
};
