/* React */
import React, { Fragment, useState } from 'react';

/* Relay */
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../environment';

/* Styles */
import styled from 'styled-components';
import { Paragraph, TitleH3 } from '../../ui-kit/typography';

/* Styled Components */
const StyledOneSong = styled.div`
    cursor: pointer;
`;

const TitleContainer = styled.div`
    margin-top: 12px;

    h3 {
        color: ${props => props.isOpen ? '#fff' : 'none'};
    }
`;

const LyricsContainer = styled.div`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    transition: 0.5s;
    margin-top: 24px;
    margin-bottom: 96px;
`;

/* Query */
const OneSongQuery = graphql`
query OneSongQuery($songID: ID!) {
    song(id: $songID) {
        lyrics
    }
}
`;

export const OneSong = ({title, songId}) => {

    // Hook for open song lyrics
    const [lyricsOpen, setOpen] = useState(false);

    // Method for toggle lyrics
    const _toggleLyrics = () => setOpen(!lyricsOpen);

    return <QueryRenderer
        environment={environment}
        query={OneSongQuery}
        variables={{
            songID: songId
        }}
        render={({error, props}) => {
            if (error) return <div>Упс! Ошибка</div>;
            if (!props) return <Fragment />;
            if (props) return (
                <StyledOneSong>
                    <TitleContainer onClick={() => _toggleLyrics()} isOpen={lyricsOpen}>
                        <TitleH3 text={title} />
                    </TitleContainer>
                    <LyricsContainer isOpen={lyricsOpen}>
                        <Paragraph pre text={props.song.lyrics} />
                    </LyricsContainer>
                </StyledOneSong>
            );
        }}
        
    />;
};