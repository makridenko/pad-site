/* React */
import React from 'react';

/* Router */
import { Link } from 'react-router-dom';

/* Styles */
import styled from 'styled-components';

/* Icons */
import { ReactComponent as Arrow } from './icons/arrow-right.svg';

/* Settings */
import { device } from '../../settings/css-devices';

/* Styled Components */
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

    @media ${device.desktop}, ${device.desktopS}, (hover: hover) and (pointer: fine) {
        &:hover {
            background-size: auto 120%;
            button {
                visibility: visible;
                backdrop-filter: blur(4px);
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
    outline: none;
    top: 0;
    display: flex;
    visibility: hidden;
    justify-content: center;
    align-items: center;
    padding: 0;
    cursor: pointer;

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
`;

export const AlbumCover = ({src}) => (
    <AlbumCoverContainer src={src}>
        <Link to='/album'>
                <AlbumHoverButton>
                    <h3>Подробнее</h3>
                    <Arrow />
                </AlbumHoverButton>
        </Link>
    </AlbumCoverContainer>
);

