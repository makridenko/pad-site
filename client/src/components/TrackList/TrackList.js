/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { TitleH3 } from '../../ui-kit/typography';

/* Components */
import { OneSong } from './OneSong';

/* Styled Components */
const StyledTrackListContainer = styled.div`
    width: 317px;
    height: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    padding-top: 48px;

    h3 {
    }
`;

const StyledSongs = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 24px;
`;


const TrackList = ({songs}) => (
    <StyledTrackListContainer>
        <TitleH3 text={'Треклист'} thin={true} />
        <StyledSongs>
            {songs.map(song => (
                <OneSong
                    key={song.title}
                    title={song.title}
                    active={song.active}
                />
            ))}
        </StyledSongs>
    </StyledTrackListContainer>
);

export default TrackList;