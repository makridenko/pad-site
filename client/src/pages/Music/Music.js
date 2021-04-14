/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import AlbumCarousel from '../../components/AlbumCarousel';
import Singles from '../../components/Singles';

/* Styled Components */
const StyledMusic = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const Music = () => (
    <StyledMusic>
        <AlbumCarousel />
        <Singles />
    </StyledMusic>
);

export default Music;