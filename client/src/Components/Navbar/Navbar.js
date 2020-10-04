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

  /* Colors and shadows */
  background: ${props => props.backgroundImage ? 'none' : '#1f1f1f'};
  box-shadow: ${props => props.backgroundImage ? 'none' : '0px 2px 4px rgba(0, 0, 0, 0.25)'};
`;


const pagesList = [
  {href: '/music', name: 'Музыка'},
  {href: '/about', name: 'О группе'},
  {href: '/video', name: 'Видео'},
  {href: '/contacts', name: 'Контакты'},
];


const Navbar = ({backgroundImage, pageHref}) => {
  return (
    <StyledNavbar backgroundImage={backgroundImage}>
      <Logo logoSrc={'./logo.png'} />
      <Pages pagesList={pagesList} pageHref={pageHref} />
      <SocialMedia />
    </StyledNavbar>
  );
};

export default Navbar;
