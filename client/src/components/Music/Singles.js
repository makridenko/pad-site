/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import SingleList from './SingleList';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledSinglesContainer = styled.div`
    width: 100%;
    margin: 120px 0;

    @media ${device.mobile} {
        margin: 92px 0 48px 0;
    }
`;

const Title = styled.h1`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -5%;
    color: #FFFFFF;
`;


const Singles = () => {
    return (
        <StyledSinglesContainer>
            <Title>Синглы</Title>
            <SingleList />
        </StyledSinglesContainer>
    );
};

export default Singles;