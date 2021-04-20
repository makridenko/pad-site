/* React */
import React, { useContext } from 'react';

/* Styles */
import styled from 'styled-components';

/* Settings */
import { device } from '../../settings/css-devices';

/* Context */
import { AppContext } from '../../App';

/* Styled components */
const StyledFooter = styled.footer`
    width: 100%;
    height: 71px;
    display: flex;
    justify-content: center;
    color: ${props => props.withPhoto ? '#fff' : '#656565'};
    background: ${props => props.withPhoto ? 'rgba(0,0,0,0)' : '#1F1F1F'};

    a {
        text-decoration: none;
        color: ${props => props.withPhoto ? '#fff' : '#656565'};
        border-bottom: 1px solid ${props => props.withPhoto ? '#fff' : '#656565'};
    }

    @media ${device.desktop}, ${device.desktopS} {
        position: fixed;
        bottom: 0;
    }
`;

const FooterContentContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    border-top: ${props => props.withPhoto ? 'none' : '1px solid #fff'};

    @media ${device.desktop} {
        width: 1440px;
        margin: 0 120px;
    }

    @media ${device.desktopS} {
        width: 1140px;
    }

    @media ${device.mobile} {
        width: 375px;
        margin: 0 16px;
    }

    p {
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
`;


const Footer = () => {

    const { withPhoto } = useContext(AppContext);

    return (
        <StyledFooter withPhoto={withPhoto}>
            <FooterContentContainer withPhoto={withPhoto}>
                <CopyrightContainer>
                    <p>2021 фото и напитки</p>
                </CopyrightContainer>
                <DevelopersContainer>
                    <p><a href='https://vk.com/makridos'>Разработка</a> и <a href='https://vk.com/id109156712'>дизайн</a></p>
                </DevelopersContainer>
            </FooterContentContainer>
        </StyledFooter>
    );
};

export default Footer;