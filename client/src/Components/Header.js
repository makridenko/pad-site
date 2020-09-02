/* React components */
import React from 'react';

/* Style */
import styled from 'styled-components';


/* Styled components */
const StyledHeader = styled.div`
  padding-top: 20px;
  text-align: center;
  background: rgba(0,0,0,0);
  color: white;
  font-size: 30px;
`;

const Header = () => {
  return (
    <StyledHeader>
      Header
    </StyledHeader>
  );
};

export default Header;
