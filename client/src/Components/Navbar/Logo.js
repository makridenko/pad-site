/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const LogoContainer = styled.div`
  /* Position */
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 121px;
  padding-right: 316px;
`;

const StyledLogo = styled.img`
  /* Dimensions */
  width: 90px;
  height: 28px;
`;


const Logo = ({logoSrc}) => {
  return (
      <LogoContainer>
        <a href='/'><StyledLogo src={logoSrc} /></a>
      </LogoContainer>
  );
};

export default Logo;
