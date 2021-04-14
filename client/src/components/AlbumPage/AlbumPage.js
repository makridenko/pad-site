/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import ReleaseHeader from '../ReleaseHeader';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledAlbumPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 96px 0;
`;


const AlbumPage = () => {
    return (
        <StyledAlbumPage>
            <ReleaseHeader 
                releasePhotoSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                releaseTitle={'фото и напитки'}
                date={'13 сентября 2020'}
                labelTitle={'Fuzz and Friendship'}
            />           
        </StyledAlbumPage>
    );
};

export default AlbumPage;