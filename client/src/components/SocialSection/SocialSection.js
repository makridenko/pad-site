/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { ReactComponent as VKLogo } from '../../ui-kit/vk.svg';
import { ReactComponent as InstagramLogo } from '../../ui-kit/instagram.svg';

/* Styled Components */
const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
`;

const SocialGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 24px);
    grid-gap: 16px;
`;


const SocialSection = () => (
    <SocialContainer>
        <SocialGrid>
            <VKLogo />
            <InstagramLogo />
        </SocialGrid>
    </SocialContainer>
);

export default SocialSection;