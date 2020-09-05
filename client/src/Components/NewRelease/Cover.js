/* React components */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledCoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 265px;
  padding-right: 193px;
`;

const StyledCover = styled.img`
  width: 262px;
  height: 262px;
`;


const Cover = () => {
  return (
    <StyledCoverContainer>
      <StyledCover src="./cover.png"/>
    </StyledCoverContainer>
  );
};

export default Cover;
