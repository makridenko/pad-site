/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Router */
import { BrowserRouter as Router } from 'react-router-dom';

/* Containers */
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';
import Content from './containers/Content';

/* Styled components */
const StyledApp = styled.div`
  background: #1F1F1F;
  height: 100%;
`;


const App = () => {
  return (
    <Router>
      <StyledApp>
        <Navbar />
        <Content />
        <Footer />
      </StyledApp>
    </Router>
  );
};


export default App;
