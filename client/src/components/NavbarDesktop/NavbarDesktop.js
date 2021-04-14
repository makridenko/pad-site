/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Settings */
import { device } from '../../settings/css-devices';

/* Components */
import LogoSection from './LogoSection';
import MenuSection from './MenuSection';
import SocialSection from '../SocialSection';

/* Styled Components */
const StyledNavbarDesktop = styled.div`
    width: 100%;
    height: 64px;
    position: sticky;
    top: 0;
    z-index: 1;
    background: #1F1F1F;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    @media ${device.desktop} {
        display: flex;
        justify-content: center;
    }

    @media ${device.mobile} {
        display: none;
    }
`;

const NavbarContentContainer = styled.div`
    height: 100%;
    width: 1440px;
    padding: 0 120px;
`;

const NavbarContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;


const NavbarDesktop = () => {
    return (
        <StyledNavbarDesktop>
            <NavbarContentContainer>
                <NavbarContent>
                    <LogoSection />
                    <MenuSection />
                    <SocialSection />
                </NavbarContent>
            </NavbarContentContainer>
        </StyledNavbarDesktop>
    );
};

export default NavbarDesktop;