/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import { AlbumCover } from './AlbumCover';

/* Settings */
import { device } from '../../settings/css-devices';

/* Styled Components */
const StyledCarousel = styled.div`
    width: 100%;
    display: flex;
    overflow-x: auto;
    padding: 48px 0;

    &::-webkit-scrollbar {
        border-right: 1px solid rgba(0,0,0,0);
    }

    @media ${device.desktop}, ${device.desktopS} {
        &::-webkit-scrollbar {
            height: 3px;
            border-bottom: 1px solid rgba(255,255,255,0.5);
            border-right: 1px solid rgba(0,0,0,0);
        }
        
        &::-webkit-scrollbar-thumb {
            background: #fff;
        }
    }

    @media ${device.mobile} {
        width: 100%;
        padding: 24px 0 0 0;
    }
`;


// Fake data
const data = [
    {coverSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'},
    {coverSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'},
    {coverSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'},
    {coverSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'},
    {coverSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'},
    {coverSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'},
    {coverSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'},
    {coverSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'},
    {coverSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'},
]

export const Carousel = () => (
    <StyledCarousel>
        {data.map(album => <AlbumCover
            src={album.coverSrc}
        />)}
    </StyledCarousel>
);