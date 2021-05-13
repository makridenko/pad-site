/* React */
import React, { Fragment } from 'react';

/* Relay */
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../environment';

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

/* Query */
const EventsQuery = graphql`
query EventsQuery {
    events {
        edges {
            node {
                id
                day
                humanDate
                title
                eventLink
                place
            }
        }
    }
}
`;


const Events = () => (
    <Fragment>
        <LineContainer>
            <Line />
        </LineContainer>
        <QueryRenderer
            environment={environment}
            query={EventsQuery}
            render={({error, props}) => {
                if (error) return <div>Упс! Ошибка</div>;
                if (!props) return <Fragment />;
                if (props) {
                    console.log(props);
                    return(
                    <StyledEvents>
                        {props.events.edges.map(edge => <OneEvent
                            key={edge.node.id}
                            date={edge.node.humanDate}
                            day={edge.node.day}
                            title={edge.node.title}
                            placeTitle={edge.node.place}
                            eventLink={edge.node.eventLink}
                        />)}
                    </StyledEvents>
                );
                    }
            }}
        />
    </Fragment>
);

export default Events;