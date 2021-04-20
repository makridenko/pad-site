/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import OneContact from '../../components/OneContact';

/* Settings */
import { device } from '../../settings/css-devices';

/* Styles Components */
const StyledContacts = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 300px));
    grid-gap: 59px;

    @media ${device.mobile} {
        display: grid;
        gird-template-columns: 1fr;
        grid-gap: 96px;
    }
`;

// Fake data
const data = [
    {
        title: 'Кирилл Ивошин',
        mail: 'mail@example.ru',
        vkLink: 'https://vk.com/tsar_linchetti',
        instagramLink: 'foo.bar',
        telegramLink: 'foo.bar',
    },
    {
        title: 'Семен Ремыга',
        mail: 'mail@example.ru',
        vkLink: 'https://vk.com/id30311642',
        instagramLink: 'foo.bar',
    },
];

const Contacts = () => (
    <StyledContacts>
        {data.map(contact => (
            <OneContact
                title={contact.title}
                mail={contact.mail}
                vkLink={contact.vkLink}
                instagramLink={contact.instagramLink}
                telegramLink={contact.telegramLink}
            />
        ))}
    </StyledContacts>
);

export default Contacts;