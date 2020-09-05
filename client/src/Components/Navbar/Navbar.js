/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import Logo from './Logo';
import Pages from './Pages';
import SocialMedia from './SocialMedia';

/* Styled components */
const StyledNavbar = styled.div`
  /* Dimensions */
  width: 100%;
  height: 64px;

  /* Position */
  display: flex;
  justify-content: center;
  position: fixed;

  /* Text */
  text-align: center;
  color: white;
  font-size: 30px;
`;


const pagesList = [
  {href: '#', name: 'Музыка'},
  {href: '#', name: 'О группе'},
  {href: '#', name: 'Видео'},
  {href: '#', name: 'Контакты'},
];


const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo logoSrc={'./logo.png'} />
      <Pages pagesList={pagesList} />
      <SocialMedia />
    </StyledNavbar>
  );
};

export default Navbar;
