/* React components */
import React from 'react';

/* Style */
import styled from 'styled-components';


/* Styled components */
const StyledHeader = styled.div`
  text-align: center;
  background: rgba(0,0,0,0);
  color: white;
  font-size: 30px;
  height: 64px;
  border: 1px solid #fff;
`;

const Header = () => {
  return (
    <StyledHeader>
      Header
    </StyledHeader>
  );
};

export default Header;
