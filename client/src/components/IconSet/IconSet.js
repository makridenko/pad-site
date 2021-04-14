/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Settings */
import { device } from '../../settings/css-devices';

/* Icons */
import { ReactComponent as Dezeer } from './icons/dezeer.svg';
import { ReactComponent as ITunes } from './icons/itunes.svg';
import { ReactComponent as Spotify } from './icons/spotify.svg';
import { ReactComponent as VK } from './icons/vk.svg';
import { ReactComponent as Yandex } from './icons/yandex.svg';
import { ReactComponent as Youtube } from './icons/youtube.svg';

/* Styled Components */
const StyledIconSet = styled.div`
    height: 100%;
    display: flex;

    a {
        display: flex;
        align-items: center;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 32px;

    @media ${device.mobile} {
        grid-gap: 25px;
    }
`;


const IconSet = ({
    vkLink,
    iTunesLink,
    spotifyLink,
    youtubeLink,
    dezeerLink,
    yandexLink,
}) => (
    <StyledIconSet className='icon-set'>
        <GridContainer>
            <a href={vkLink}><VK /></a>
            <a href={iTunesLink}><ITunes /></a>
            <a href={spotifyLink}><Spotify /></a>
            <a href={youtubeLink}><Youtube /></a>
            <a href={dezeerLink}><Dezeer /></a>
            <a href={yandexLink}><Yandex /></a>
        </GridContainer>
    </StyledIconSet>
);

export default IconSet;