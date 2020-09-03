/* React components */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledFooter = styled.div`
  border: 1px solid red;
  color: #fff;
  display: flex;
  margin-top: 117px;
`;


const Footer = () => {
  return (
    <StyledFooter>
      Footer.js
    </StyledFooter>
  );
};

export default Footer;
