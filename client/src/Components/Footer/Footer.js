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
  position: ${props => props.main ? 'absolute' : 'none'};
  margin-top ${props => props.main ? 'none' : '121px'};

  /* Text */
  color: #fff;
`;

const Line = styled.div`
  border-top: ${props => props.main ? 'none' : '1px solid #fff'};
  margin-left: 120px;
  margin-right: 120px;
`;

const InfoContainer = styled.div`
  display: flex;
`;

const Footer = ({pageHref}) => {
  return (
    <StyledFooter main={pageHref === '/' ? true : false}>
      <Line main={pageHref === '/' ? true : false}/>
      <InfoContainer>
        <Copyright text={'2020 Фото и напитки'} />
        <Authors developLink={'#'} designLink={'#'} />
      </InfoContainer>
    </StyledFooter>
  );
};

export default Footer;
