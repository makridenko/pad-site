/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import OneSingle from './OneSingle';

/* Styled components */
const StyledSingleList = styled.div`
  border-top: 1px solid #fff;
  max-height: 576px;
  overflow: scroll;
  overflow-x: hidden;
`;


const SingleList = () => {
  return (
    <StyledSingleList>
      <OneSingle />
      <OneSingle />
      <OneSingle />
      <OneSingle />
      <OneSingle />
      <OneSingle />
      <OneSingle />
      <OneSingle />
      <OneSingle />
    </StyledSingleList>
  );
};

export default SingleList;
