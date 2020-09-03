/* React components */
import React, { Component } from 'react';

/* Components */
import Header from './Header';
import Main from './Main';
import NewRelease from './NewRelease';
import Footer from './Footer';


export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <Main /> */}
        <NewRelease />
        <Footer />
      </div>
    );
  };
};
