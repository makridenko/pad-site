/* React */
import React, { Fragment } from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { ReactComponent as Arrow } from '../../ui-kit/arrow-right-single.svg';
import { ReactComponent as Amazon } from '../../ui-kit/amazon-single.svg';
import { ReactComponent as Dezeer } from '../../ui-kit/dezeer-single.svg';
import { ReactComponent as ITunes } from '../../ui-kit/itunes-single.svg';
import { ReactComponent as Spotify } from '../../ui-kit/spotify-single.svg';
import { ReactComponent as VK } from '../../ui-kit/vk-single.svg';
import { ReactComponent as Yandex } from '../../ui-kit/yandex-single.svg';
import { ReactComponent as Youtube } from '../../ui-kit/youtube-single.svg';
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledSingleList = styled.div`
    width: 100%;

    @media ${device.desktop} {
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

const StyledOneSingle = styled.div`
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: row;
    transition: 0.3s;
    cursor: pointer;

    @media ${device.desktop} {
        height: 72px;
        width: calc(100% - 17px);
        &:hover {
            background: rgba(255, 255, 255, 0.1);

            .date {
                display: none;
            }

            .icons {
                display: flex;
            }
        }
    }

    @media ${device.mobile} {
        height: 75px;
        width: 100%;
    }
`;

const ImageContainer = styled.div`
    height: 100%;
    margin-left: 21px;
    display: flex;
    align-items: center;

    img {
        width: 30px;
        height: 30px;
    }

    @media ${device.mobile} {
        margin-left: 0;
    }
`;

const TitleContainer = styled.div`
    height: 100%;
    margin-left: 20px;
    display: flex;
    align-items: center;

    h3 {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -5%;
        color: #FFFFFF;
    }
`;

const DateContainer = styled.div`
    height: 100%;
    margin-left: 69px;
    display: flex;
    align-items: center;
    transition: 0.3s;

    h3 {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -5%;
        color: #656565;
    }

    @media ${device.mobile} {
        display: none;
    }
`;

const ArrowContainer = styled.div`
    height: 100%;
    margin-right: 0;
    margin-left: auto;
    display: flex;
    align-items: center;
`;

const SocialContainer = styled.div`
    height: 100%;
    margin-left: 69px;
    display: none;
    align-items: center;
    
    svg {
        margin-right: 32px;
    }
`;

const OneSingle = ({
    imgSrc, 
    title, 
    date, 
    vkLink,
    iTunesLink,
    spotifyLink,
    youtubeLink,
    dezeerLink,
    yandexLink,
    amazonLink,
}) => {
    return (
        <StyledOneSingle>
            <ImageContainer>
                <img 
                    alt={title}
                    src={imgSrc}
                />
            </ImageContainer>
            <TitleContainer>
                <h3>{title}</h3>
            </TitleContainer>
            <DateContainer className='date'>
                <h3>{date}</h3>
            </DateContainer>
            <SocialContainer className='icons'>
                <a href={vkLink}><VK /></a>
                <a href={iTunesLink}><ITunes /></a>
                <a href={spotifyLink}><Spotify /></a>
                <a href={youtubeLink}><Youtube /></a>
                <a href={dezeerLink}><Dezeer /></a>
                <a href={yandexLink}><Yandex /></a>
                <a href={amazonLink}><Amazon /></a>
            </SocialContainer>
            <ArrowContainer>
                <Arrow />
            </ArrowContainer>
        </StyledOneSingle>
    );
};

const SingleList = () => {
    return (
        <Fragment>
            <FakeLine />
            <StyledSingleList>
                <OneSingle 
                    imgSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                    title={'летом нельзя плакать'}
                    date={'13 сентября 2020'}
                    vkLink={'https://vk.com/'}
                    iTunesLink={'https://vk.com/'}
                    spotifyLink={'https://vk.com/'}
                    youtubeLink={'https://youtube.com/'}
                    dezeerLink={'https://vk.com/'}
                    yandexLink={'https://yandex.com/'}
                    amazonLink={'https://amazon.com/'}
                />
                <OneSingle 
                    imgSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                    title={'летом нельзя плакать'}
                    date={'13 сентября 2020'}
                    vkLink={'https://vk.com/'}
                    iTunesLink={'https://vk.com/'}
                    spotifyLink={'https://vk.com/'}
                    youtubeLink={'https://youtube.com/'}
                    dezeerLink={'https://vk.com/'}
                    yandexLink={'https://yandex.com/'}
                    amazonLink={'https://amazon.com/'}
                />
                 <OneSingle 
                    imgSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                    title={'летом нельзя плакать'}
                    date={'13 сентября 2020'}
                    vkLink={'https://vk.com/'}
                    iTunesLink={'https://vk.com/'}
                    spotifyLink={'https://vk.com/'}
                    youtubeLink={'https://youtube.com/'}
                    dezeerLink={'https://vk.com/'}
                    yandexLink={'https://yandex.com/'}
                    amazonLink={'https://amazon.com/'}
                />
                <OneSingle 
                    imgSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                    title={'летом нельзя плакать'}
                    date={'13 сентября 2020'}
                    vkLink={'https://vk.com/'}
                    iTunesLink={'https://vk.com/'}
                    spotifyLink={'https://vk.com/'}
                    youtubeLink={'https://youtube.com/'}
                    dezeerLink={'https://vk.com/'}
                    yandexLink={'https://yandex.com/'}
                    amazonLink={'https://amazon.com/'}
                />
                <OneSingle 
                    imgSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                    title={'летом нельзя плакать'}
                    date={'13 сентября 2020'}
                    vkLink={'https://vk.com/'}
                    iTunesLink={'https://vk.com/'}
                    spotifyLink={'https://vk.com/'}
                    youtubeLink={'https://youtube.com/'}
                    dezeerLink={'https://vk.com/'}
                    yandexLink={'https://yandex.com/'}
                    amazonLink={'https://amazon.com/'}
                />
                <OneSingle 
                    imgSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                    title={'летом нельзя плакать'}
                    date={'13 сентября 2020'}
                    vkLink={'https://vk.com/'}
                    iTunesLink={'https://vk.com/'}
                    spotifyLink={'https://vk.com/'}
                    youtubeLink={'https://youtube.com/'}
                    dezeerLink={'https://vk.com/'}
                    yandexLink={'https://yandex.com/'}
                    amazonLink={'https://amazon.com/'}
                />
                <OneSingle 
                    imgSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                    title={'летом нельзя плакать'}
                    date={'13 сентября 2020'}
                    vkLink={'https://vk.com/'}
                    iTunesLink={'https://vk.com/'}
                    spotifyLink={'https://vk.com/'}
                    youtubeLink={'https://youtube.com/'}
                    dezeerLink={'https://vk.com/'}
                    yandexLink={'https://yandex.com/'}
                    amazonLink={'https://amazon.com/'}
                />
                <OneSingle 
                    imgSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                    title={'летом нельзя плакать'}
                    date={'13 сентября 2020'}
                    vkLink={'https://vk.com/'}
                    iTunesLink={'https://vk.com/'}
                    spotifyLink={'https://vk.com/'}
                    youtubeLink={'https://youtube.com/'}
                    dezeerLink={'https://vk.com/'}
                    yandexLink={'https://yandex.com/'}
                    amazonLink={'https://amazon.com/'}
                />
                <OneSingle 
                    imgSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                    title={'летом нельзя плакать'}
                    date={'13 сентября 2020'}
                    vkLink={'https://vk.com/'}
                    iTunesLink={'https://vk.com/'}
                    spotifyLink={'https://vk.com/'}
                    youtubeLink={'https://youtube.com/'}
                    dezeerLink={'https://vk.com/'}
                    yandexLink={'https://yandex.com/'}
                    amazonLink={'https://amazon.com/'}
                />
                <OneSingle 
                    imgSrc={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                    title={'летом нельзя плакать'}
                    date={'13 сентября 2020'}
                    vkLink={'https://vk.com/'}
                    iTunesLink={'https://vk.com/'}
                    spotifyLink={'https://vk.com/'}
                    youtubeLink={'https://youtube.com/'}
                    dezeerLink={'https://vk.com/'}
                    yandexLink={'https://yandex.com/'}
                    amazonLink={'https://amazon.com/'}
                />
 
            </StyledSingleList>
        </Fragment>
    );
};

export default SingleList;