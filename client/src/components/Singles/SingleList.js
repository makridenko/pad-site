/* React */
import React, { Fragment } from 'react';

/* Relay */
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../environment';

/* Components */
import { OneSingle } from './OneSingle';

/* Styles */
import styled from 'styled-components';

/* Settings */
import { device } from '../../settings/css-devices';
import { BACKEND_URL } from '../../global_settings';

/* Styled Components */
const StyledSingleList = styled.div`
    width: 100%;

    a {
        text-decoration: none;
    }

    @media ${device.desktop}, ${device.desktopS} {
        max-height: 576px;
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

    @media ${device.mobile} {
        overflow-x: visible;
        &::-webkit-scrollbar {
            display: none;
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

/* Query */
const SingleListQuery = graphql`
query SingleListQuery {
    releases(isSingle: true) {
        edges {
            node {
                id
                title
                cover
                humanDate
                vkLink
                appleMusicLink
                spotifyLink
                youtubeLink
                deezerLink
                yandexMusicLink
            }
        }
    }
}
`;

const SingleList = () => (
    <Fragment>
        <FakeLine />
        <QueryRenderer
            environment={environment}
            query={SingleListQuery}
            render={({error, props}) => {
                if (error) return <div>Упс! Ошибка</div>;
                if (!props) return <Fragment />;
                if (props) return (
                    <StyledSingleList>
                        {props.releases.edges.map(edge => <OneSingle
                            id={edge.node.id}
                            key={edge.node.id}
                            title={edge.node.title}
                            imgSrc={`${BACKEND_URL}/media/${edge.node.cover}`}
                            date={edge.node.humanDate}
                            vkLink={edge.node.vkLink}
                            iTunesLink={edge.node.appleMusicLink}
                            spotifyLink={edge.node.spotifyLink}
                            youtubeLink={edge.node.youtubeLink}
                            deezerLink={edge.node.deezerLink}
                            yandexLink={edge.node.yandexLink}
                        />)}
                    </StyledSingleList>
                )
            }}
        />
    </Fragment>
);

export default SingleList;