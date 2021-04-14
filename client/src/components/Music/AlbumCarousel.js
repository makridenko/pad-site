/* React */
import React from 'react';

/* Router */
import { Link } from 'react-router-dom';

/* Styled */
import styled from 'styled-components';

/* UI-Kit */
import { ReactComponent as Arrow } from '../../ui-kit/arrow-right-album.svg';
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledAlbumCarousel = styled.div`
    max-width: 100%;
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
    display: flex;
    overflow-x: auto;
    padding: 48px 0;

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
        padding: 24px 0 0 0;
    }
`;

const AlbumCoverContainer = styled.div`
    flex: 0 0 240px;
    height: 240px;
    margin-right: 24px;
    overflow: hidden;
    background-image: ${props => `url(${props.src})`};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 100%;
    position: relative;
    transition: 0.5s;

    @media ${device.desktop} {
        &:hover {
            
            background-size: auto 120%;

            button {
                visibility: visible;
            }
        }
    }

    @media ${device.mobile} {
        flex: 0 0 100px;
        height: 100px;
        margin-right: 16px;
    }
`;

const AlbumHoverButton = styled.button`
    width: 240px;
    height: 240px;
    position: absolute;
    background: rgba(0,0,0,0);
    border: none;
    backdrop-filter: blur(4px);
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
            <AlbumCoverContainer src={src}>
        <Link to='/album'>
                <AlbumHoverButton>
                    <h3>Подробнее</h3>
                    <Arrow />
                </AlbumHoverButton>
        </Link>
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