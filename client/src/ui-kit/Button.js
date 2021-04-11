/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Styled Components */
const StyledButton = styled.button`
    width: 193px;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${props => props.active ? '#fff': 'rgba(0,0,0,0)'};
    border: 1px solid #fff;
    transition: 0.5s;
    outline: none;
    cursor: pointer;

    svg {
        margin-left: 8px;
    }

    p {
        font-family: Montserrat;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -5%;
        color: ${props => props.active ? '#000' : '#fff'};
    }

    &:hover {
        background: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.1)'};
    }
`;


export const Button = ({text, active, onClick, svg}) => (
    <StyledButton active={active} onClick={onClick}>
        <p>{text}</p>
        {svg}
    </StyledButton>
);