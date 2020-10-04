/* React */
import React, {useEffect} from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledAbout = styled.div`
  color: #fff;
`;


const About = ({setBackgroundImageState, setPageHref}) => {
  useEffect(() => {
    setPageHref('/about');
    setBackgroundImageState(false);
  });
  return (
    <StyledAbout>
      About.js
    </StyledAbout>
  );
};

export default About;
