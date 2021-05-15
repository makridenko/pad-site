/* React */
import React, { Fragment } from 'react';

/* Relay */
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../environment';

/* Styles */
import styled from 'styled-components';

/* Components */
import { AlbumCover } from './AlbumCover';
import { MobileAlbumCover } from './MobileAlbumCover';

/* Settings */
import { device } from '../../settings/css-devices';

/* Styled Components */
const StyledCarousel = styled.div`
    width: 100%;
    display: flex;
    overflow-x: auto;
    padding: 48px 0;

    &::-webkit-scrollbar {
        border-right: 1px solid rgba(0,0,0,0);
        height: 3px;
        border-bottom: 1px solid rgba(255,255,255,0.5);
        border-right: 1px solid rgba(0,0,0,0);
    }
    
    &::-webkit-scrollbar-thumb {
        background: #fff;
    }

    @media ${device.mobile} {
        display: none;
    }
`;

const StyledMobileCarousel = styled.div`
    width: 100%;
    overflow-x: auto;
    padding: 24px 0 0 0;

    &::-webkit-scrollbar {
        display: none;
    }

    @media ${device.desktop}, ${device.desktopS} {
        display: none;
    }

    @media ${device.mobile} {
        display: flex;
    }
`;

/* Query */
const CarouselQuery = graphql`
query CarouselQuery {
    releases(isSingle: false) {
        edges {
            node {
                id
                cover
            }
        }
    }
}
`;

export const Carousel = () => (
    <Fragment>
        <QueryRenderer
            environment={environment}
            query={CarouselQuery}
            render={({error, props}) => {
                if (error) return <div>Упс! Ошибка</div>;
                if (!props) return <Fragment />;
                if (props) return (
                    <Fragment>
                        <StyledCarousel>
                            {props.releases.edges.map(edge => <AlbumCover
                                key={edge.node.id}
                                albumId={edge.node.id}
                                src={`http://localhost:8000/media/${edge.node.cover}`}
                            />)}
                        </StyledCarousel>
                        <StyledMobileCarousel>
                            {props.releases.edges.map(edge => <MobileAlbumCover 
                                key={edge.node.id}
                                albumId={edge.node.id}
                                src={`http://localhost:8000/media/${edge.node.cover}`}
                            />)}
                        </StyledMobileCarousel>
                    </Fragment>
                );
            }}
        />
    </Fragment>
);