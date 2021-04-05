/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled components */
const StyledFooter = styled.footer`
    width: 100%;
    height: 71px;
    display: flex;
    justify-content: center;
`;

const FooterContentContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #fff;

    @media ${device.desktop} {
        width: 1440px;
        margin: 0 120px;
    }

    @media ${device.mobile} {
        width: 375px;
        margin: 0 16px;
    }
`;

const FakeCopyright = styled.div`
    width: 141px;
    height: 24px;
    border: 1px solid tomato;
    margin-top: 23px;
`;

const FakeDevelopers = styled.div`
    width: 141px;
    height: 24px;
    border: 1px solid tomato;
    margin-top: 23px;
    margin-right: 0;
    margin-left: auto;
`;


const Footer = () => {
    return (
        <StyledFooter>
            <FooterContentContainer>
                <FakeCopyright>Copyright</FakeCopyright>
                <FakeDevelopers>Developers</FakeDevelopers>
            </FooterContentContainer>
        </StyledFooter>
    );
};

export default Footer;