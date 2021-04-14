/* React */
import React, { Fragment } from 'react';

/* Styles */
import styled from 'styled-components';

/* Icons */
import { ReactComponent as VK } from './icons/vk.svg';
import { ReactComponent as Instagram } from './icons/instagram.svg';
import { ReactComponent as Telegram } from './icons/telegram.svg';

/* UI-Kit */
import { TitleH1,TitleH3 } from '../../ui-kit/typography';

/* Styled Components */
const StyledOneContact = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 24px;
    }

    h3 {
        margin-bottom: 25px;
    }
`;


const SocialContainer = styled.div`
    display: grid;
    grid-template-rows: 24px;
    grid-template-columns: repeat(auto-fill, 24px);
    grid-gap: 24px;
`;


const OneContact = ({title, mail, vkLink, instagramLink, telegramLink}) => (
    <StyledOneContact>
        <TitleH1 text={title} />
        <TitleH3 main={true} text={mail} />
        <SocialContainer>
            {vkLink ? <a href={vkLink}><VK /></a> : <Fragment />}
            {instagramLink ? <a href={instagramLink}><Instagram /></a> : <Fragment />}
            {telegramLink ? <a href={telegramLink}><Telegram /></a> : <Fragment />}
        </SocialContainer>
    </StyledOneContact>
);

export default OneContact;