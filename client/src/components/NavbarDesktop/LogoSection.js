/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Router */
import { Link } from 'react-router-dom';

/* Icons */
import { ReactComponent as Logo } from './icons/logo.svg';

/* Styled Components */
const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LogoSection = () => (
    <LogoContainer>
        <Link to='/'><Logo /></Link>
    </LogoContainer>
);

export default LogoSection;