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

  &::-webkit-scrollbar {
    width: 3px;
    background: rgba(0,0,0,0);
    border-right: 1px solid rgba(255,255,255,0.5);
  }

  &::-webkit-scrollbar-thumb {
    background: #fff;
  }
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
