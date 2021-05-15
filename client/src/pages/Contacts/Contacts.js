/* React */
import React, { Fragment } from 'react';

/* Relay */
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../environment';

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

/* Query */
const ContactsQuery = graphql`
query ContactsQuery {
    members(isContactFace: true) {
        edges {
            node {
                id
                firstName
                lastName
                vkLink
                telegramLink
                instagramLink
                mail
            }
        }
    }
}
`;

const Contacts = () => <QueryRenderer
    environment={environment}
    query={ContactsQuery}
    render={({error, props}) => {
        if (error) return <div>Упс! Ошибка</div>;
        if (!props) return <Fragment />;
        if (props) return (
            <StyledContacts>
                {props.members.edges.map(edge => <OneContact 
                    key={edge.node.id}
                    title={`${edge.node.firstName} ${edge.node.lastName}`}
                    mail={edge.node.mail}
                    vkLink={edge.node.vkLink}
                    instagramLink={edge.node.instagramLink}
                    telegramLink={edge.node.telegramLink}
                />)}
            </StyledContacts>
        )
    }}
/>;

export default Contacts;