/* React */
import React, { useState } from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';
import { ReactComponent as Burger } from '../../ui-kit/burger.svg';
import { ReactComponent as Logo } from '../../ui-kit/logo-mobile.svg';

/* Components */
import SocialSection from '../SocialSection';

/* Helpers */
import { sections } from '../helpers';

/* Styled Components */
const StyledNavbarMobile = styled.div`
    width: 100%;
    height: ${props => props.openMenu ? '339px' : '48px'};
    position: fixed;
    top: 0;
    z-index: 0;
    background: #1F1F1F;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    transition: 0.5s;

    @media ${device.desktop} {
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
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-left: 40px;
`;

const MenuContainer = styled.div`
    width: 100%;
    padding-top: 39px;
    display: flex;
    flex-direction: column;
`;

const SectionContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 27px;
    color: #fff;
`;

const MenuButton = styled.a`
    color: #fff;
    text-decoration: none;
    opacity: ${props => props.openMenu ? '1' : '0'};
    transition-delay: ${props => props.openMenu ? '0.4s' : '0'};

    font-family: Montserrat;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -5%;
`;


const NavbarMobile = () => {
    // Hook for menu open
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <StyledNavbarMobile openMenu={openMenu}>
            <NavbarContentContainer>
                <NavbarContent>
                    <BurgerContainer onClick={() => setOpenMenu(!openMenu)} >
                        <Burger />
                    </BurgerContainer>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>
                    <SocialSection />
                </NavbarContent>
                <MenuContainer openMenu={openMenu}>
                    {sections.map(section => (
                        <SectionContainer key={section.link}>
                            <MenuButton openMenu={openMenu} href={section.link}>
                                {section.title}
                            </MenuButton>
                        </SectionContainer>
                    ))}
                </MenuContainer>
            </NavbarContentContainer>
        </StyledNavbarMobile>
    );
};

export default NavbarMobile;