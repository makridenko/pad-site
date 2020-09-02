/* React components */
import React, { Component } from 'react';

/* Components */
import Header from './Header';
import Main from './Main';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  };
};
