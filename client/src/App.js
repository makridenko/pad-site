/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';

/* Styled components */
const StyledApp = styled.div`
  background: #1F1F1F;
  height: 100vh;
  padding: 0;
`;

const Content = styled.div`
  width: 100%;
`;

const App = () => {
  return (
    <StyledApp>
      <Navbar />
      <Content>
      </Content>
      <Footer />
    </StyledApp>
  );
};


export default App;
