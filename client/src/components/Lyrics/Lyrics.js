/* React */
import React, { Fragment } from 'react';

/* Relay */
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../environment';

/* Styles */
import styled from 'styled-components';

/* Settings */
import { device } from '../../settings/css-devices';

/* UI-Kit */
import { Paragraph, TitleH3 } from '../../ui-kit/typography';

/* Styled Components */
const StyledLyrics = styled.div`
    height: 100%;
    width: 793px;
    margin-left: ${props => props.single ? '125px' : 0};
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    padding-top: 48px;

    h3 {
        font-weight: 400;
        margin-bottom: 24px;
    }

    @media ${device.mobile} {
        width: 100%;
        margin-left: 0;
    }
`;


/* Query */
const LyricsQuery = graphql`
query LyricsQuery($songID: ID!) {
    song(id: $songID) {
        lyrics
    }
}
`;

const Lyrics = ({currentSongId, single}) => (
    <StyledLyrics single={single}>
        {currentSongId ? 
            <QueryRenderer
                environment={environment}
                query={LyricsQuery}
                variables={{
                    songID: currentSongId,
                }}
                render={({error, props}) => {
                    if (error) return <div>Упс! Ошибка</div>
                    if (!props) return <Fragment />;
                    if (props) return (
                        <Fragment>
                            <TitleH3 text={'Текст'} />
                            <Paragraph pre={true} text={props.song.lyrics} />
                        </Fragment>
                    );
                }}
            />
        :
            <Fragment />
        }
   </StyledLyrics>
);

export default Lyrics;