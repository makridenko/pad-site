/* React */
import React, { useState, createContext, useEffect } from 'react';

/* Styles */
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

/* Router */
import { useLocation } from 'react-router-dom';

/* Settings */
import { GlobalStyles, defaultMode, photoMode } from './settings/global-styles';
import { device } from './settings/css-devices';

/* Containers */
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';
import Content from './containers/Content';

/* UI-Kit */
import { animationAppear } from './ui-kit/animation';

/* Styled components */
const StyledApp = styled.div`
  @media ${device.desktop} {
    ${props => props.mainPage ? animationAppear : 'animation: none'};
  }
  height: 100%;
`;


export const AppContext = createContext({});


const App = () => {

  // Hook for disable animations on main page
  const [disableAnimation, setDisable] = useState(false);

  useEffect(() => setTimeout(() => setDisable(true), 3000), []);

  // Use router hook to know route path for animations
  const location = useLocation();

  // Hook for switch theme
  const [withPhoto, setWithPhoto] = useState(location.pathname === '/');

  // Hook for change main page content
  const [isNewRelease, setNewRelease] = useState(false);

  return (
    <AppContext.Provider value={{
      withPhoto, setWithPhoto, isNewRelease, setNewRelease
    }}>
      <ThemeProvider theme={withPhoto ? photoMode : defaultMode}>
        <GlobalStyles />
          <StyledApp mainPage={location.pathname === '/' && !disableAnimation}>
            <Navbar />
            <Content />
            <Footer />
          </StyledApp>
      </ThemeProvider>
    </ AppContext.Provider>
  );
};


export default App;
