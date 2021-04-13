/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import AlbumCarousel from './AlbumCarousel';
import Singles from './Singles';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledMusic = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 96px 0;

    @media ${device.mobile} {
        margin-top: 48px;
        width: 343px;
    }
`;


const Music = () => {
    return (
        <StyledMusic>
            <AlbumCarousel />
            <Singles />
        </StyledMusic>
    );
};

export default Music;