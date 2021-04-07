/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled components */
const TitleContainer = styled.div`
    width: 100%;

    h1 {
        font-family: Montserrat;
        font-weight: 400;
        color: #fff;
        letter-spacing: -5%;
        margin: 0;
    }

    @media ${device.desktop} {
        h1 {
            font-size: 60px;
            line-height: 60px;
        }
    }

    @media ${device.mobile} {
        h1 {
            font-size: 42px;
            line-height: 63px;
        }
    }
`;


const Title = ({text}) => (
    <TitleContainer>
        <h1>{text}</h1>
    </TitleContainer>
);

export default Title;