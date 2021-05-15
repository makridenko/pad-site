/* React */
import React from 'react';

/* Router */
import { Link } from 'react-router-dom';

/* Styles */
import styled from 'styled-components';

/* Styled Components */
const MobileAlbumCoverContainer = styled.div`
    overflow: hidden;
    background-image: ${props => `url(${props.src})`};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: auto 100%;
    position: relative;
    flex: 0 0 100px;
    height: 100px;
    margin-right: 16px;

    button {
        width: 90px;
        height: 90px;
        border: none;
        outline: none;
        background: rgba(0,0,0,0);
        padding: 0;
        position: absolute;
    }
`;

export const MobileAlbumCover = ({src, albumId}) => (
    <MobileAlbumCoverContainer src={src}>
        <Link to={`/album/${albumId}`}>
            <button />
        </Link>
    </MobileAlbumCoverContainer>
);

