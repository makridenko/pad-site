/* React */
import React from 'react';

/* Styled */
import styled from 'styled-components';

/* UI-Kit */
import { ReactComponent as Arrow } from '../../ui-kit/arrow-right-album.svg';
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledAlbumCarousel = styled.div`
`;

const Title = styled.h1`
    margin: 0;
    font-family: Montserrat;
    font-weight: normal;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -5%;
    color: #FFFFFF;
`;

const StyledCarousel = styled.div`
    width: 100%;
    margin-top: 48px;
    padding-bottom: 48px;
    display: grid;
    grid-template-rows: 240px;
    grid-auto-flow: column;
    grid-gap: 25px;

    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar {
        border-right: 1px solid rgba(0,0,0,0);
    }

    @media ${device.desktop} {
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
        width: 343px;
        grid-template-rows: 100px;
        grid-gap: 16px;
        padding-bottom: 0;
        margin-top: 24px;
    }
`;

const AlbumCoverContainer = styled.div`
    width: 240px;
    height: 240px;
    overflow: hidden;

    @media ${device.desktop} {
        position: relative;

        &:hover {
            img {
                filter: blur(4px);
            }

            button {
                visibility: visible;
            }
        }
    }

    @media ${device.mobile} {
        width: 100px;
        height: 100px;
    }
`;

const AlbumCoverImage = styled.img`
    width: 240px;
    height: 240px;
    transition: 0.1s;

    @media ${device.mobile} {
        width: 100px;
        height: 100px;
    }
`;

const AlbumHoverButton = styled.button`
    width: 240px;
    height: 240px;
    position: absolute;
    background: rgba(0,0,0,0);
    border: none;
    outline: none;
    top: 0;
    display: flex;
    visibility: hidden;
    justify-content: center;
    align-items: center;
    padding: 0;

    h3 {
        margin: 0;
        font-family: Montserrat;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -5%;
        color: #FFFFFF;
    }

    svg {
        margin-left: 30px;
    }

    @media ${device.mobile} {
        display: none;
    }
`;

const AlbumCover = ({src}) => {
    return (
        <AlbumCoverContainer>
            <AlbumCoverImage
                src={src}
            />
            <AlbumHoverButton>
                <h3>Подробнее</h3>
                <Arrow />
            </AlbumHoverButton>
        </AlbumCoverContainer>
    );
};


const Carousel = () => {
    return (
        <StyledCarousel>
            <AlbumCover
                src={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
            />
            <AlbumCover
                src={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
            />
            <AlbumCover
                src={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
            />
            <AlbumCover
                src={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
            />
            <AlbumCover
                src={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
            />
            <AlbumCover
                src={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
            />
            <AlbumCover
                src={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
            />
        </StyledCarousel>
    );
};


const AlbumCarousel = () => {
    return (
        <StyledAlbumCarousel>
            <Title>Альбомы</Title>
            <Carousel />
        </StyledAlbumCarousel>
    );
};

export default AlbumCarousel;