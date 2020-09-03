/* React components */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import Cover from './Cover';
import Info from './Info';

/* Styled components */
const StyledNewRelease = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 120px;
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
