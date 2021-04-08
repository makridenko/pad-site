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
    @media ${device.desktop} {
        position: fixed;
        bottom: 0;
    }
    background: #1F1F1F;
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

    p {
        color: #656565;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 14px;
        line-height: 23.8px;
        letter-spacing: -5%;
        margin: 0;
    }
`;

const CopyrightContainer = styled.div`
    margin-top: 23px;
`;

const DevelopersContainer = styled.div`
    margin-top: 23px;
    margin-right: 0;
    margin-left: auto; 

    a {
        text-decoration: none;
        color: #656565;
        border-bottom: 1px solid #656565;
    }
`;


const Footer = () => {
    return (
        <StyledFooter>
            <FooterContentContainer>
                <CopyrightContainer>
                    <p>2021 Фото и напитки</p>
                </CopyrightContainer>
                <DevelopersContainer>
                    <p><a href='#'>Разработка</a> и <a href='#'>дизайн</a></p>
                </DevelopersContainer>
            </FooterContentContainer>
        </StyledFooter>
    );
};

export default Footer;