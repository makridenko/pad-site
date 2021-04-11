/* React */
import React, { Fragment } from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';
import { ReactComponent as Line } from '../../ui-kit/line.svg';
import { ReactComponent as PlaceIcon } from '../../ui-kit/subtract.svg';

/* Styled Components */
const LineContainer = styled.div`
    @media ${device.desktop} {
        margin-top: 34px;
    }

    @media ${device.mobile} {
        svg {
            display: none;
        }
    }
`;

const StyledEvents = styled.div`

    @media ${device.desktop} {
        height: 432px;
        width: 599px;
        overflow-x: hidden;

        &::-webkit-scrollbar {
            width: 3px;
            background: rgba(0, 0, 0, 0);
            border-right: 1px solid rgba(255,255,255,0.5);
        }

        &::-webkit-scrollbar-thumb {
            background: #fff;
        }
    }

    @media ${device.mobile} {
        width: 100%;
        height: 100%;
        margin-top: 48px;
    }
`;

const StyledOneEvent = styled.div`
    display: flex;
    flex-direction: row;
    padding: 24px 0;

    @media ${device.desktop} {
        width: 566px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    }

    @media ${device.mobile} {
        border-top: 1px solid rgba(255, 255, 255, 0.5);
    }
`;

const Header = styled.h3`
    margin: 0;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -5%;
    color: #fff;
`;

const Text = styled.p`
    margin: 0;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -5%;
    color: #656565;
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


const OneEvent = () => {
    return (
        <StyledOneEvent>
            <DateContainer>
                <Header>6 июня</Header>
                <Text>Суббота</Text>
            </DateContainer>
            <InfoContainer>
                <Header>TWINKLISH GiG</Header>
                <PlaceContainer>
                    <PlaceIcon />
                    <Text>Punk Fiction</Text>
                </PlaceContainer>
            </InfoContainer>
        </StyledOneEvent>
    );
};

const Events = () => {
    return (
        <Fragment>
            <LineContainer>
                <Line />
            </LineContainer>
            <StyledEvents>
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
                <OneEvent />
            </StyledEvents>
        </Fragment>
    );
};

export default Events;