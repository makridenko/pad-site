/* React */
import React, { useState } from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import { MainDesktop } from './MainDesktop';
import { MainMobile } from './MainMobile';

/* Helpers */
import { useWindowWidth } from './helpers';

/* Settings */
import { device } from '../../settings/css-devices';

/* Styled Components */
const StyledMain = styled.div`
    @media ${device.desktop} {
        display: flex;
        flex-direction: row;
    }

    @media ${device.mobile} {
        display: flex;
        flex-direction: column;
        margin-top: 24px;
    }
`;


const Main = () => {

    // Hook for change page content
    const [isNewRelease, setNewRelease] = useState(false);

    // Get user screen width
    const { width } = useWindowWidth();
    
    // For toggle component MainDesktop and MainMobile
    const mobileScreen = width < 1440;

    return (
        <StyledMain>
            {mobileScreen ?
                <MainMobile
                    isNewRelease={isNewRelease}
                    setNewRelease={setNewRelease}
                    bandDescription={'Здесь должен быть какой-то текст на пару строк, может быть на даже на три, а может и на все четыре, я хз'}
                    releaseType={'Альбом'}
                    releaseTitle={'фото и напитки 2020'}
                    releaseDescription={'Описательный текст про содержание альбома описательный текст про содержание альбома описательный текст про содержание альбома описательный текст про содержание альбома  описательный текст про содержание альбома'}
                    releasePhotoSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                />
                :
                <MainDesktop
                    isNewRelease={isNewRelease}
                    setNewRelease={setNewRelease}
                    bandDescription={'Здесь должен быть какой-то текст на пару строк, может быть на даже на три, а может и на все четыре, я хз'}
                    releaseType={'Альбом'}
                    releaseTitle={'фото и напитки 2020'}
                    releaseDescription={'Описательный текст про содержание альбома описательный текст про содержание альбома описательный текст про содержание альбома описательный текст про содержание альбома  описательный текст про содержание альбома'}
                    releasePhotoSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                />
            }
        </StyledMain>
    );
};

export default Main;