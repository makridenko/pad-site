/* React */
import React, { useState } from 'react';

/* Styles */
import styled from 'styled-components';

/* Router */
import { Link } from 'react-router-dom';

/* Settings */
import { device } from '../../settings/css-devices';

/* Icons */
import { ReactComponent as Burger } from './icons/burger.svg';
import { ReactComponent as Close } from './icons/close.svg';
import { ReactComponent as Logo } from './icons/logo.svg';

/* Components */
import SocialSection from '../SocialSection';

/* Helpers */
import { sections } from '../../settings/navbar-sections';

/* Styled Components */
const StyledNavbarMobile = styled.div`
    width: 100%;
    height: ${props => props.openMenu ? '339px' : '48px'};
    position: fixed;
    top: 0;
    z-index: 1;
    background: #1F1F1F;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    transition: 0.5s;

    @media ${device.desktop}, ${device.desktopS} {
        display: none;
    }

    @media ${device.mobile} {
        display: flex;
        justify-content: center;
    }
`;

const NavbarContentContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 16px;
`;

const NavbarContent = styled.div`
    height: 48px;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const BurgerContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0;
    margin-right: auto;
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-right: 81.57px;
    width: 100%;
`;

const MenuContainer = styled.div`
    width: 100%;
    padding-top: 39px;
    display: flex;
    flex-direction: column;
    margin-top: ${props => props.openMenu ? '0' : '-100%'};
`;

const SectionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 27px;

    a {
        color: #fff;
        text-decoration: none;
        opacity: ${props => props.openMenu ? '1' : '0'};
        transition-delay: ${props => props.openMenu ? '0.4s' : '0'};

        font-family: Montserrat;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -5%;
    }
`;


const NavbarMobile = () => {
    // Hook for menu open
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <StyledNavbarMobile openMenu={openMenu}>
            <NavbarContentContainer>
                <NavbarContent>
                    <BurgerContainer onClick={() => setOpenMenu(!openMenu)} >
                        {openMenu ? <Close /> : <Burger />}
                    </BurgerContainer>
                    <LogoContainer>
                        <Link to='/'><Logo /></Link>
                    </LogoContainer>
                    <SocialSection />
                </NavbarContent>
                <MenuContainer openMenu={openMenu}>
                    {sections.map(section => (
                        <SectionContainer 
                            key={section.link} 
                            openMenu={openMenu}
                        >
                            <Link 
                                to={section.link}
                                onClick={() => setOpenMenu(false)}
                            >
                                {section.title}
                            </Link>
                        </SectionContainer>
                    ))}
                </MenuContainer>
            </NavbarContentContainer>
        </StyledNavbarMobile>
    );
};

export default NavbarMobile;