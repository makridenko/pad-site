/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Containers */
import Navbar from './containers/Navbar';
import Footer from './containers/Footer';

/* Components */
import Main from './components/Main';

/* UI-kit */
import { device } from './ui-kit/css-devices';

/* Styled components */
const StyledApp = styled.div`
  background: #1F1F1F;
  height: 100%;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  @media ${device.desktop} {
    width: 100%;
    max-width: 1440px;
    margin: 0 120px;
    display: flex;
    justify-content: center;
  }

  @media ${device.mobile} {
    height: 100%;
    padding-top: 48px;
  }
`;

const App = () => {
  return (
    <StyledApp>
      <Navbar />
      <ContentContainer>
        <Content>
          <Main />
        </Content>
      </ContentContainer>
      <Footer />
    </StyledApp>
  );
};


export default App;
