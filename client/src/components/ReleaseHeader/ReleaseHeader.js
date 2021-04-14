/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledReleaseHeader = styled.div`
    width: 100%;
    display: flex;
`;

const ImageContainer = styled.div`
    width: 192px;
    height: 192px;

    img {
        width: 192px;
        height: 192px;
    }
`;

const InfoContainer = styled.div`
    height: 100%;
    margin-left: 125px;
`;

const ReleaseTitle = styled.h1`
    margin: 0;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -5%;
    color: #FFFFFF;
`;

const MetaContainer = styled.div`
    margin-top: 48px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const MetaOneContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 59px;
`;

const MetaTitle = styled.h3`
    margin: 0 0 24px 0;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -5%;
    color: #656565;
`;

const MetaParagraph = styled.p`
    margin: 0;
    font-family: Montserrat;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -5%;
    color: #FFFFFF;
`;


const ReleaseHeader = ({releasePhotoSrc, releaseTitle, date, labelTitle}) => {
    return (
        <StyledReleaseHeader>
            <ImageContainer>
                <img src={releasePhotoSrc} />
            </ImageContainer>
            <InfoContainer>
                <ReleaseTitle>{releaseTitle}</ReleaseTitle>
                <MetaContainer>
                    <MetaOneContainer>
                        <MetaTitle>Релиз</MetaTitle>
                        <MetaParagraph>{date}</MetaParagraph>
                    </MetaOneContainer>
        
                    <MetaOneContainer>
                        <MetaTitle>Лейбл</MetaTitle>
                        <MetaParagraph>{labelTitle}</MetaParagraph>
                    </MetaOneContainer>

                    <MetaOneContainer>
                        <MetaTitle>Послушать</MetaTitle>
                    </MetaOneContainer>
                </MetaContainer>
            </InfoContainer>
        </StyledReleaseHeader>
    );
};

export default ReleaseHeader;