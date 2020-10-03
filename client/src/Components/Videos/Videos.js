/* React */
import React, {useEffect} from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledVideos = styled.div`
  color: #fff;
`;


const Videos = ({setBackgroundImageState}) => {
  useEffect(() => setBackgroundImageState(false));
  return (
    <StyledVideos>
      Videos.js
    </StyledVideos>
  );
};

export default Videos;
