/* React */
import React, { Fragment } from 'react';

/* Relay */
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../environment';

/* Styles */
import styled from 'styled-components';

/* Components */
import ReleaseHeader from '../../components/ReleaseHeader';
import Lyrics from '../../components/Lyrics';

/* Settings */
import { device } from '../../settings/css-devices';
import { BACKEND_URL } from '../../global_settings';

/* Styled Components */
const StyledSingle = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.desktop} {
        justify-content: center;
        align-items: center;
    }
`;

const SingleContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 72px;

    @media ${device.mobile} {
        margin-top: 48px;
    }
`;

const FakeContainer = styled.div`
    width: 192px;

    @media ${device.mobile} {
        display: none;
    }
`;

/* Query */
const SingleQuery = graphql`
query SingleQuery($singleID: ID!) {
    release(id: $singleID) {
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
                    lyrics
                }
            }
        }
    }
}
`;

const Single = (props) => {
    // Get single id from url
    const singleID = props.match.params.singleId;

    return <QueryRenderer
        environment={environment}
        query={SingleQuery}
        variables={{
            singleID: singleID,
        }}
        render={({error, props}) => {
            if (error) return <div>Упс! Ошибка</div>;
            if (!props) return <Fragment />;
            if (props) {
                // Get single id from song set
                const songId = props.release?.songSet.edges[0].node.id;

                return (
                    <StyledSingle>
                        <ReleaseHeader 
                            releasePhotoSrc={`${BACKEND_URL}/media/${props.release?.cover}`}
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
                        <SingleContentContainer>
                            <FakeContainer />
                            <Lyrics
                                single={true}
                                currentSongId={songId}
                            />
                        </SingleContentContainer>
                    </StyledSingle>
            )}
        }}
        
    />;
};

export default Single;