/* React */
import React, { Fragment } from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { ReactComponent as Line } from '../../ui-kit/line.svg';
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const LineContainer = styled.div`
    @media ${device.desktop} {
        margin-top: 48px;
    }

    @media ${device.mobile} {
        svg {
            display: none;
        }
    }
`;

const StyledEvents = styled.div`
    height: 100%;
    background: #fff;

    @media ${device.desktop} {
        width: 599px;
    }

    @media ${device.mobile} {
        width: 100%;
        height: 100px;
        margin-top: 48px;
    }
`;


const Events = () => {
    return (
        <Fragment>
            <LineContainer>
                <Line />
            </LineContainer>
            <StyledEvents />
        </Fragment>
    );
};

export default Events;