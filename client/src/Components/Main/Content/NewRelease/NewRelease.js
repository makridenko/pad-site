/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import Cover from './Cover';
import Info from './Info';

/* Styled components */
const StyledNewRelease = styled.div`
  /* Position */
  display: flex;
  margin-top: 48px;
`;


const NewRelease = () => {
  return (
      <StyledNewRelease>
        <Cover />
        <Info />
      </StyledNewRelease>
  );
};

export default NewRelease;
