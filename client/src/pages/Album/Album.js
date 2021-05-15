/* React */
import React, { Fragment, useState } from 'react';

/* Relay */
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../environment';

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
    margin-top: 48px;

    @media ${device.desktop}, ${device.desktopS} {
        display: none;
    }

    @media ${device.mobile} {
        display: flex;
    }
`;

/* Query */
const AlbumQuery = graphql`
query AlbumQuery($albumID: ID!) {
    release(id: $albumID) {
        cover
        title
        humanDate
        label
        vkLink
        appleMusicLink
        spotifyLink
        youtubeLink
        deezerLink
        yandexMusicLink
        songSet {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
}
`;

const Album = (props) => {
    // Get album id from url
    let albumID = props.match.params.albumId;

    // Hook for change song id lyric
    const [currentSongId, setCurrentSongId] = useState(null);

    return <QueryRenderer
        environment={environment}
        query={AlbumQuery}
        variables={{
            albumID: albumID,
        }}
        render={({error, props}) => {
            if (error) return <div>Упс! Ошибка</div>;
            if (!props) return <Fragment />;
            if (props) return (
                <StyledAlbum>
                    <ReleaseHeader
                        releasePhotoSrc={`http://localhost:8000/media/${props.release?.cover}`}
                        releaseTitle={props.release?.title}
                        date={props.release?.humanDate}
                        labelTitle={props.release?.label}
                        vkLink={props.release?.vkLink}
                        appleMusicLink={props.release?.appleMusicLink}
                        spotifyLink={props.release?.spotifyLink}
                        youtubeLink={props.release?.youtubeLink}
                        deezerLink={props.release?.deezerLink}
                        yandexLink={props.release?.yandexLink}
                    />
                    <AlbumContentContainer>
                        <TrackList
                            songs={props.release?.songSet}
                            currentSongId={currentSongId}
                            setCurrentSongId={setCurrentSongId}
                        />
                        <Lyrics
                            currentSongId={currentSongId}
                        />
                    </AlbumContentContainer>
                    <MobileTracklistContainer>
                        <MobileTracklist
                            songs={props.release?.songSet}
                        />
                    </MobileTracklistContainer>
                </StyledAlbum>
            );
        }}
    />;
}

export default Album;