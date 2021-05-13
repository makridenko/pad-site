/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Settings */
import { device } from '../../settings/css-devices';

/* Icons */
import { ReactComponent as PlaceIcon } from './icons/subtract.svg';

/* UI-Kit */
import { TitleH3 } from '../../ui-kit/typography';

/* Styled Components */
const StyledOneEvent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 24px 0;

    @media ${device.desktop}, ${device.desktopS} {
        width: 566px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);

        cursor: pointer;
    }

    @media ${device.mobile} {
        width: 100%;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
    }
`;

const DateContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const InfoContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;

    h3, div {
        margin-left: auto;
    }
`;

const PlaceContainer = styled.div`
    display: flex;
    svg {
        padding-top: 5px;
        padding-right: 9px;
    }

`;


const OneEvent = ({date, day, title, placeTitle, eventLink}) => (
    <StyledOneEvent onClick={() => window.open(eventLink)}>
        <DateContainer>
            <TitleH3 main={true} text={date} />
            <TitleH3 text={day} />
        </DateContainer>
        <InfoContainer>
            <TitleH3 main={true} text={title} />
            <PlaceContainer>
                <PlaceIcon />
                <TitleH3 text={placeTitle} />
            </PlaceContainer>
        </InfoContainer>
    </StyledOneEvent>
);

export default OneEvent;