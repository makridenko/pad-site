/* React */
import React, { Fragment } from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import OneEvent from './OneEvent';

/* Settings */
import { device } from '../../settings/css-devices';

/* Icons */
import { ReactComponent as Line } from './icons/line.svg';

/* Styled Components */
const LineContainer = styled.div`
    @media ${device.desktop}, ${device.desktopS} {
        margin-top: 34px;
    }

    @media ${device.mobile} {
        svg {
            display: none;
        }
    }
`;

const StyledEvents = styled.div`
    height: 432px;
    width: 599px;

    @media ${device.desktop}, ${device.desktopS} {
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


// Fake data
const data = [
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
    {date: '6 июня', day: 'Суббота', title: 'TWINKLISH GiG', placeTitle: 'Punk Fiction'},
]


const Events = () => (
    <Fragment>
        <LineContainer>
            <Line />
        </LineContainer>
        <StyledEvents>
            {data.map(event => (
                <OneEvent
                    date={event.date}
                    day={event.day}
                    title={event.title}
                    placeTitle={event.placeTitle}
                />
            ))}
        </StyledEvents>
    </Fragment>
);

export default Events;