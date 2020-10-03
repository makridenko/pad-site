/* React components */
import React, { useState } from 'react';

/* Router */
import { Route, Switch } from 'react-router-dom';

/* Style */
import styled from 'styled-components';

/* Components */
import Navbar from './Navbar';
import Main from './Main';
import Music from './Music';
import About from './About';
import Videos from './Videos';
import Contacts from './Contacts';

/* Static */
import background from './Images/background.png';

const StyledApp = styled.div`
  background-image: ${props => props.backgroundImage ? `url(${props.background})` : 'none'};
  background-color: ${props => props.backgroundImage ? 'none' : '#1f1f1f'};
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
`;


const App = () => {
  const [backgroundImage, setBackgroundImageState] = useState(true);
  console.log(backgroundImage);
  return (
    <StyledApp backgroundImage={backgroundImage} background={background}>
      <Navbar/>

      <Switch>
        <Route exact path='/' component={(props) => (
          <Main setBackgroundImageState={setBackgroundImageState}/>
        )}/>

        <Route exact path='/music' component={(props) => (
          <Music setBackgroundImageState={setBackgroundImageState}/>
        )}/>

        <Route exact path='/about' component={(props) => (
          <About setBackgroundImageState={setBackgroundImageState}/>
        )}/>

        <Route exact path='/video' component={(props) => (
          <Videos setBackgroundImageState={setBackgroundImageState}/>
        )}/>

        <Route exact path='/contacts' component={(props) => (
          <Contacts setBackgroundImageState={setBackgroundImageState}/>
        )}/>
      </Switch>

    </StyledApp>
  );
};

export default App;
