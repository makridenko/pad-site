/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { TitleH3 } from '../../ui-kit/typography';

/* Styled Components */
const StyledOneSong = styled.div`
    margin-bottom: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    h3 {
        transition: 0.3s;
        font-weight: 700;
        color: ${props => props.active ? '#fff': 'rgba(255, 255, 255, 0.6)'};
        margin-left: ${props => props.active ? '19px': 0};
    }

    &:hover {
        h3 {
            color: #fff;
        }
    }
`;

const FakeLine = styled.div`
    width: 32px;
    border: 1px solid #fff;
    display: ${props => props.active ? 'flex': 'none'};
`;

export const OneSong = ({title, active}) => (
    <StyledOneSong active={active}>
        <FakeLine className='line' active={active} />
        <TitleH3 text={title} />
    </StyledOneSong>
);