/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import ReleaseHeader from '../../components/ReleaseHeader';
import Lyrics from '../../components/Lyrics';
import TrackList from '../../components/TrackList';
import MobileTracklist from '../../components/MobileTracklist';

/* Settings */
import { device } from '../../settings/css-devices';

/* Styled Components */
const StyledAlbum = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AlbumContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 72px;

    @media ${device.mobile} {
        display: none;
    }
`;

const MobileTracklistContainer = styled.div`
    display: flex;
    margin-top: 48px;

    @media ${device.desktop} ${device.desktopS} {
        display: none;
    }
`;

// Fake data
const text = `Порой зеленых чистых листьев,
Где до рассвета стелется туман,
Закаты теплые так близко,
Моих фантазий красочный фонтан.

В эту пору почувствуешь дыханье,
Дыханье ветра - с ним не совладать.
Поля цветов, исполнятся желанья,
Не нужно так страдать.

Дорога стелется во мраке,
Кругом разлуки, суета и драки,
Осень вернет уныние и слякоть,
Но летом нельзя плакать.

Ходить быстрее, верить так уперто,
Что просто цели выльются в мечты.
Даром не нужно - посылаю к черту,
Не видя красоты.

Порой зеленых чистых листьев,
Где до рассвета стелется туман,
К закатам теплым прикоснись ты,
На зиму положи в карман.

Дорога стелется во мраке,
Кругом разлуки, суета и драки,
Осень вернет уныние и слякоть,
Но летом нельзя плакать.
`;

const data = [
    {title: 'Летом нельзя плакать', active: true},
    {title: '31 августа'},
    {title: 'Волны и бури'},
    {title: 'Экологическая песня'},
    {title: 'Теплый стан'},
    {title: 'Плечом к плечу'},
    {title: 'Последние блинки128 тепла'},
    {title: 'Дорога в лес'},
    {title: 'Спутник'},
    {title: '11.12.87'},
    {title: 'Прощальный вальс'},
]

const Album = () => (
    <StyledAlbum>
        <ReleaseHeader 
            releasePhotoSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
            releaseTitle={'фото и напитки'}
            date={'13 сентября 2020'}
            labelTitle={'Fuzz and Friendship'}
            vkLink={'https://vk.com/'}
            iTunesLink={'https://vk.com/'}
            spotifyLink={'https://vk.com/'}
            youtubeLink={'https://youtube.com/'}
            dezeerLink={'https://vk.com/'}
            yandexLink={'https://yandex.com/'}
        />
        <AlbumContentContainer>
            <TrackList 
                songs={data}
            />
            <Lyrics
                text={text}
            />
        </AlbumContentContainer>
        <MobileTracklistContainer>
            <MobileTracklist
                songs={data}
            />
        </MobileTracklistContainer>     
    </StyledAlbum>
);

export default Album;