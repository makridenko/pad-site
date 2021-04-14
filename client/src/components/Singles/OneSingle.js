/* React */
import React from 'styled-components';

/* Router */
import { Link } from 'react-router-dom';

/* Components */
import IconSet from '../IconSet';

/* Styles */
import styled from 'styled-components';

/* Icons */
import { ReactComponent as Arrow } from './icons/arrow-right.svg';

/* Settings */
import { device } from '../../settings/css-devices';
import { TitleH3 } from '../../ui-kit/typography';

/* Styled Components */
const StyledOneSingle = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: row;
    transition: 0.3s;
    cursor: pointer;

    .icon-set {
        display: none;
    }

    @media ${device.desktop} {
        height: 72px;
        width: calc(100% - 17px);
        &:hover {
            background: rgba(255, 255, 255, 0.1);

            .date {
                display: none;
            }

            .icon-set {
                display: flex;
                margin-left: 69px;
            }
        }
    }

    @media ${device.mobile} {
        height: 75px;
        width: 100%;
    }
`;

const ImageContainer = styled.div`
    height: 100%;
    margin-left: 21px;
    display: flex;
    align-items: center;

    img {
        width: 30px;
        height: 30px;
    }

    @media ${device.mobile} {
        margin-left: 0;
    }
`;

const TitleContainer = styled.div`
    height: 100%;
    margin-left: 20px;
    display: flex;
    align-items: center;
`;

const DateContainer = styled.div`
    height: 100%;
    margin-left: 69px;
    display: flex;
    align-items: center;
    transition: 0.3s;

    @media ${device.mobile} {
        display: none;
    }
`;

const ArrowContainer = styled.div`
    height: 100%;
    margin-right: 0;
    margin-left: auto;
    display: flex;
    align-items: center;
`;



export const OneSingle = ({
    imgSrc, 
    title, 
    date, 
    vkLink,
    iTunesLink,
    spotifyLink,
    youtubeLink,
    dezeerLink,
    yandexLink,
}) => {
    return (
        <Link to='/single'>
            <StyledOneSingle>
                <ImageContainer>
                    <img alt={title} src={imgSrc} />
                </ImageContainer>
                <TitleContainer>
                    <TitleH3 main={true} text={title} />
                </TitleContainer>
                <DateContainer className='date'>
                    <TitleH3 text={date} />
                </DateContainer>
                <IconSet
                    vkLink={vkLink}
                    iTunesLink={iTunesLink}
                    spotifyLink={spotifyLink}
                    youtubeLink={youtubeLink}
                    dezeerLink={dezeerLink}
                    yandexLink={yandexLink}
                />
                <ArrowContainer>
                    <Arrow />
                </ArrowContainer>
            </StyledOneSingle>
        </Link>
    );
};

