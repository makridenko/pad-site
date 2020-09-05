/* React components */
import React, { Component } from 'react';

/* Router */
import { Route, Switch } from 'react-router-dom';

/* Components */
import Navbar from './Navbar';
import Main from './Main';
import Music from './Music';
import About from './About';
import Videos from './Videos';
import Contacts from './Contacts';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route exact path='/' component={(props) => (
            <Main />
          )}/>

          <Route exact path='/music' component={(props) => (
            <Music />
          )}/>

          <Route exact path='/about' component={(props) => (
            <About />
          )}/>

          <Route exact path='/video' component={(props) => (
            <Videos />
          )}/>

          <Route exact path='/contacts' component={(props) => (
            <Contacts />
          )}/>
        </Switch>

      </div>
    );
  };
};
