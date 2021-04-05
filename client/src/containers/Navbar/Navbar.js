/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled components */
const StyledNavbar = styled.header`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;

    position: sticky;
    top: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

const NavbarContentContainer = styled.div`
    height: 100%;

    @media ${device.desktop} {
        width: 1440px;
        padding: 0 120px;
    }

    @media ${device.mobile} {
        width: 375px;
        padding: 0 16px;
    }
`;

const NavbarContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const FakeLogo = styled.div`
    width: 90px;
    height: 28px;
    border: 1px solid tomato;
    margin-top: 18px;
`;

const NavButtonsContainer = styled.div`
    width: 511px;
    height: 41px;
    border: 1px solid tomato;
    display: flex;
    margin-left: 253px;
`;

const FakeButton = styled.div`
    width: 56px;
    height: 21px;
    margin-top: 20px;
`;

const SocialContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 24px);
    grid-gap: 16px;
    margin-right: 0;
    margin-left: auto;
`;

const FakeSocial = styled.div`
    width: 24px;
    height: 24px;
    background: #fff;
    margin-top: 19px;
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <NavbarContentContainer>
                <NavbarContent>
                    <FakeLogo>Logo</FakeLogo>
                    <NavButtonsContainer>
                        <FakeButton>Button</FakeButton>
                        <FakeButton>Button</FakeButton>
                        <FakeButton>Button</FakeButton>
                        <FakeButton>Button</FakeButton>
                        <FakeButton>Button</FakeButton>
                    </NavButtonsContainer>
                    <SocialContainer>
                        <FakeSocial />
                        <FakeSocial />
                    </SocialContainer>
                </NavbarContent>
            </NavbarContentContainer>
        </StyledNavbar>
    );
};

export default Navbar;