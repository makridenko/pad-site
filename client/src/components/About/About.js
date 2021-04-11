/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import StoryLine from './StoryLine';
import Members from './Members';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledAbout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 96px;
    margin-bottom: 96px;

    @media ${device.mobile} {
        margin-top: 48px;
    }
`;

const Title = styled.h1`
    margin: 0;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -5%;
    color: #FFFFFF;
`;


const About = () => {
    return (
        <StyledAbout>
            <Title>Биография</Title>
            <StoryLine />
            <Members />
        </StyledAbout>
    );
};

export default About;