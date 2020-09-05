/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import Copyright from './Copyright';
import Authors from './Authors';

/* Styled components */
const StyledFooter = styled.div`
  /* Dimensions */
  width: 100%;
  height: 71px;

  /* Position */
  left: 0;
  bottom: 0;
  position: absolute;
  display: flex;

  /* Text */
  color: #fff;
`;


const Footer = () => {
  return (
    <StyledFooter>
      <Copyright text={'2020 Фото и напитки'} />
      <Authors developLink={'#'} designLink={'#'} />
    </StyledFooter>
  );
};

export default Footer;
