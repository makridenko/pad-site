/* React */
import React, { useEffect } from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import Albums from './Albums';
import Singles from './Singles';

/* Styled components */
const StyledMusic = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;


const Music = ({setBackgroundImageState}) => {
  useEffect(() => setBackgroundImageState(false));
  return (
    <StyledMusic>
      <Albums />
      <Singles />
    </StyledMusic>
  );
};

export default Music;
