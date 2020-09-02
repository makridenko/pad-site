/* React components */
import React from 'react';

/* Components */
import MainInfo from './MainInfo';
import Events from './Events';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledMain = styled.div`
  display: flex;
  margin-top: 184px;
`;


const Main = () => {
  return (
    <StyledMain>
      <MainInfo />
      <Events />
    </StyledMain>
  );
};

export default Main;
