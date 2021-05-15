/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { Paragraph, TitleH1, TitleH3 } from '../../ui-kit/typography';

/* Settings */
import { device } from '../../settings/css-devices';

/* Icons */
import IconSet from '../IconSet';

/* Styled Components */
const StyledReleaseHeader = styled.div`
    display: flex;

    @media ${device.mobile} {
        flex-direction: column;
    }
`;

const ImageContainer = styled.div`
    width: 192px;
    height: 192px;

    img {
        width: 192px;
        height: 192px;
    }

    @media ${device.mobile} {
        margin-bottom: 24px;
    }
`;

const InfoContainer = styled.div`
    height: 100%;
    margin-left: 125px;

    @media ${device.mobile} {
        margin-left: 0;
    }
`;


const MetaContainer = styled.div`
    margin-top: 48px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    @media ${device.mobile} {
        display: grid;
        grid-template-columns: 138px 155px;
        grid-template-rows: 72px;
        grid-row-gap: 48px;
        grid-column-gap: 43px;
    }
`;

const MetaOneContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 59px;

    h3 {
        margin-top: 24px;
    }

    .icon-set {
        margin-top: 18px;
    }

    p {
        color: #656565;
    }

    @media ${device.mobile} {
        margin-right: 0;
    }
`;



const ReleaseHeader = ({
    releasePhotoSrc, 
    releaseTitle, 
    date, 
    labelTitle,
    vkLink,
    appleMusicLink,
    spotifyLink,
    youtubeLink,
    deezerLink,
    yandexLink,
}) => (
    <StyledReleaseHeader>
        <ImageContainer>
            <img alt={releaseTitle} src={releasePhotoSrc} />
        </ImageContainer>
        <InfoContainer>
            <TitleH1 text={releaseTitle} />
            <MetaContainer>
                <MetaOneContainer className='grid-one'>
                    <Paragraph text={'Релиз'} />
                    <TitleH3 main={true} text={date} />
                </MetaOneContainer>
    
                <MetaOneContainer className='grid-two'>
                    <Paragraph text={'Лейбл'} />
                    <TitleH3 main={true} text={labelTitle} />
                </MetaOneContainer>

                <MetaOneContainer className='grid-three'>
                    <Paragraph text={'Послушать'} />
                    <IconSet 
                        vkLink={vkLink}
                        appleMusicLink={appleMusicLink}
                        spotifyLink={spotifyLink}
                        youtubeLink={youtubeLink}
                        deezerLink={deezerLink}
                        yandexLink={yandexLink}
                    />
                </MetaOneContainer>
            </MetaContainer>
        </InfoContainer>
    </StyledReleaseHeader>
);

export default ReleaseHeader;