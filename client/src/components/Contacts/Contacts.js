/* React */
import React, { Fragment } from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';
import { ReactComponent as VK } from '../../ui-kit/vk-contacts.svg';
import { ReactComponent as Instagram } from '../../ui-kit/inst-contacts.svg';
import { ReactComponent as Telegram } from '../../ui-kit/tg-contacts.svg';

/* Styles Components */
const StyledContacts = styled.div`
    margin-top: 96px;
    width: 100%;
    display: flex;
    flex-direction: row;

    @media ${device.mobile} {
        margin-top: 48px;
        flex-direction: column;
        width: 343px;
    }
`;

const StyledOneContact = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 59px 0 0;

    @media ${device.mobile} {
        margin: 0 0 96px 0;
    }
`;

const Name = styled.h1`
    margin: 0 0 24px 0;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -5%;
    color: #FFFFFF;
`;

const EMail = styled.h3`
    margin: 0 0 15px 0;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -5%;
    color: #FFFFFF;
`;

const SocialContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    svg {
        margin-right: 24px;
    }
`;


const OneContact = ({title, mail, vkLink, instagramLink, telegramLink}) => {
    return (
        <StyledOneContact>
            <Name>{title}</Name>
            <EMail>{mail}</EMail>
            <SocialContainer>
                {vkLink ? <a href={vkLink}><VK /></a> : <Fragment />}
                {instagramLink ? <a href={instagramLink}><Instagram /></a> : <Fragment />}
                {telegramLink ? <a href={telegramLink}><Telegram /></a> : <Fragment />}
            </SocialContainer>
        </StyledOneContact>
    );
};


const Contacts = () => {
    return (
        <StyledContacts>
            <OneContact
                title={'Кирилл Ивошин'}
                mail={'mail@example.ru'}
                vkLink={'https://vk.com/tsar_linchetti'}
                instagramLink={'foo.bar'}
                telegramLink={'foo.bar'}
            />
            <OneContact
                title={'Семен Ремыга'}
                mail={'mail@example.ru'}
                vkLink={'https://vk.com/id30311642'}
                instagramLink={'foo.bar'}
            />
        </StyledContacts>
    );
};

export default Contacts;