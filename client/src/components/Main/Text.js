/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const TextContainer = styled.div`
    p {
        font-family: Montserrat;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -5%;
        color: #fff;
        margin: 0;
    }

    @media ${device.desktop} {
        width: 470px;
        margin-top: 36px;
    }

    @media ${device.mobile} {
        width: 343px;
        margin-top: 33px;
    }
`;


const Text = ({text}) => (
    <TextContainer>
        <p>{text}</p>
    </TextContainer>
);

export default Text;