/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* StyledComponents */
const StyledCover = styled.div`
  /* Dimensions */
  width: 50%;

  /* Position */
  display: flex;
  justify-content: center;
`;

const StyledCoverImage = styled.img`
  /* Dimensions */
  width: 300px;
  height: 300px;
`;


const Cover = () => {
  return (
    <StyledCover>
      <StyledCoverImage src='./cover.png' />
    </StyledCover>
  );
};

export default Cover;
