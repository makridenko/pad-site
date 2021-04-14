/* React */
import React from 'react';

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


const Lyrics = ({text, single}) => (
    <StyledLyrics single={single}>
        <TitleH3 text={'Текст'} />
        <Paragraph pre={true} text={text} />
    </StyledLyrics>
);

export default Lyrics;