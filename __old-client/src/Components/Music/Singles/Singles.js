/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import SingleList from './SingleList';

/* Styled components */
const Title = styled.h1`
`;

const StyledSingles = styled.div`
  width: 87%;
  margin-top: 120px;
`;


const Singles = () => {
  return (
      <StyledSingles>
        <Title>Синглы</Title>
        <SingleList />
      </StyledSingles>
  );
};

export default Singles;
