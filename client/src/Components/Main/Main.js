/* React components */
import React from 'react';

/* Components */
import Footer from './Footer'
import Content from './Content';
import ToggleButtons from './ToggleButtons';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledMain = styled.div`
`;

const StyledMainInfo = styled.div`
  /* Dimensions */
  height: 100vh;

  /* Position */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  /* Dimensions */
  width: 100%;

  /* Position */
  position: absolute;
  color: #fff;
  display: flex;
  flex-direction: column;
`;


const Main = () => {
  return (
    <StyledMain>
      <StyledMainInfo>
        <ContentContainer>
          <ToggleButtons />
          <Content />
        </ContentContainer>
      </StyledMainInfo>
      <Footer />
    </StyledMain>
  );
};

export default Main;
