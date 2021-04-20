/* React */
import React, { Fragment } from 'react';

/* Components */
import { OneSingle } from './OneSingle';

/* Styles */
import styled from 'styled-components';

/* Settings */
import { device } from '../../settings/css-devices';

/* Styled Components */
const StyledSingleList = styled.div`
    width: 100%;

    a {
        text-decoration: none;
    }

    @media ${device.desktop}, ${device.desktopS} {
        height: 576px;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 3px;
            background: rgba(0,0,0,0);
            border-right: 1px solid rgba(255,255,255,0.5);
        }

        &::-webkit-scrollbar-thumb {
            background: #fff;
        }
    }
`;

const FakeLine = styled.div`
    border: 1px solid #fff;
    width: calc(100% - 22px);

    @media ${device.mobile} {
        width: 100%;
    }
`;

// Fake data
const data = [
    {
        imgSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album',
        title: 'летом нельзя плакать',
        date: '13 сентября 2020',
        vkLink: 'https://vk.com/',
        iTunesLink: 'https://vk.com/',
        spotifyLink: 'https://vk.com/',
        youtubeLink: 'https://youtube.com/',
        dezeerLink: 'https://vk.com/',
        yandexLink: 'https://yandex.com/',
    },
    {
        imgSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album',
        title: 'летом нельзя плакать',
        date: '13 сентября 2020',
        vkLink: 'https://vk.com/',
        iTunesLink: 'https://vk.com/',
        spotifyLink: 'https://vk.com/',
        youtubeLink: 'https://youtube.com/',
        dezeerLink: 'https://vk.com/',
        yandexLink: 'https://yandex.com/',
    },
    {
        imgSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album',
        title: 'летом нельзя плакать',
        date: '13 сентября 2020',
        vkLink: 'https://vk.com/',
        iTunesLink: 'https://vk.com/',
        spotifyLink: 'https://vk.com/',
        youtubeLink: 'https://youtube.com/',
        dezeerLink: 'https://vk.com/',
        yandexLink: 'https://yandex.com/',
    },
    {
        imgSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album',
        title: 'летом нельзя плакать',
        date: '13 сентября 2020',
        vkLink: 'https://vk.com/',
        iTunesLink: 'https://vk.com/',
        spotifyLink: 'https://vk.com/',
        youtubeLink: 'https://youtube.com/',
        dezeerLink: 'https://vk.com/',
        yandexLink: 'https://yandex.com/',
    },
    {
        imgSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album',
        title: 'летом нельзя плакать',
        date: '13 сентября 2020',
        vkLink: 'https://vk.com/',
        iTunesLink: 'https://vk.com/',
        spotifyLink: 'https://vk.com/',
        youtubeLink: 'https://youtube.com/',
        dezeerLink: 'https://vk.com/',
        yandexLink: 'https://yandex.com/',
    },
    {
        imgSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album',
        title: 'летом нельзя плакать',
        date: '13 сентября 2020',
        vkLink: 'https://vk.com/',
        iTunesLink: 'https://vk.com/',
        spotifyLink: 'https://vk.com/',
        youtubeLink: 'https://youtube.com/',
        dezeerLink: 'https://vk.com/',
        yandexLink: 'https://yandex.com/',
    },
    {
        imgSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album',
        title: 'летом нельзя плакать',
        date: '13 сентября 2020',
        vkLink: 'https://vk.com/',
        iTunesLink: 'https://vk.com/',
        spotifyLink: 'https://vk.com/',
        youtubeLink: 'https://youtube.com/',
        dezeerLink: 'https://vk.com/',
        yandexLink: 'https://yandex.com/',
    },
    {
        imgSrc: 'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album',
        title: 'летом нельзя плакать',
        date: '13 сентября 2020',
        vkLink: 'https://vk.com/',
        iTunesLink: 'https://vk.com/',
        spotifyLink: 'https://vk.com/',
        youtubeLink: 'https://youtube.com/',
        dezeerLink: 'https://vk.com/',
        yandexLink: 'https://yandex.com/',
    },
]

const SingleList = () => (
    <Fragment>
        <FakeLine />
        <StyledSingleList>
            {data.map(single => <OneSingle
                imgSrc={single.imgSrc}
                title={single.title}
                date={single.date}
                vkLink={single.vkLink}
                iTunesLink={single.iTunesLink}
                spotifyLink={single.spotifyLink}
                youtubeLink={single.youtubeLink}
                dezeerLink={single.dezeerLink}
                yandexLink={single.yandexLink}
            />)}
        </StyledSingleList>
    </Fragment>
);

export default SingleList;