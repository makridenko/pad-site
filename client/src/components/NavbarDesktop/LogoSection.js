/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { ReactComponent as Logo } from '../../ui-kit/logo.svg';

/* Styled Components */
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LogoSection = () => (
    <LogoContainer>
        <Logo />
    </LogoContainer>
);

export default LogoSection;