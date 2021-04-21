/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import { OneSong } from './OneSong';

/* UI-Kit */
import { TitleH3 } from '../../ui-kit/typography';

/* Styled components */
const StyledMobileTracklist = styled.div`
    border-top: 1px solid white;
    padding-top: 48px;
    width: 343px;
`;

const StyledSongs = styled.div`
    margin-top: 24px;
`;


const MobileTracklist = ({songs}) => (
    <StyledMobileTracklist>
        <TitleH3 text={'Треклист'} thin={true} />
        <StyledSongs>
            {songs.map(song => (
                <OneSong
                    key={song.title}
                    title={song.title}
                />
            ))}
        </StyledSongs>
    </StyledMobileTracklist>
);

export default MobileTracklist;