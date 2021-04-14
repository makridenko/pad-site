/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import SingleList from './SingleList';

/* Settings */
import { device } from '../../settings/css-devices';

/* UI-Kit */
import { TitleH1 } from '../../ui-kit/typography';

/* Styled Components */
const StyledSinglesContainer = styled.div`
    margin-top: 120px;

    @media ${device.mobile} {
        margin-top: 92px;
    }
`;



const Singles = () => (
    <StyledSinglesContainer>
        <TitleH1 text={'Синглы'} />
        <SingleList />
    </StyledSinglesContainer>
);

export default Singles;