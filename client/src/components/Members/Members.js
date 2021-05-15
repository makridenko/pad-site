/* React */
import React, { Fragment } from 'react';

/* Relay */
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../environment';

/* Styles */
import styled from 'styled-components';

/* Components */
import OneMember from './OneMember';

/* Settings */
import { device } from '../../settings/css-devices';
import { BACKEND_URL } from '../../global_settings';

/* UI-Kit */
import { TitleH1 } from '../../ui-kit/typography';

/* Styled Components */
const StyledMembers = styled.div`
    width: 100%;
    margin-top: 157px;

    @media ${device.mobile} {
        width: 343px;
        margin-top: 120px;
        margin-bottom: 0;
    }
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 49px;

    @media ${device.mobile} {
        flex-direction: column-reverse;
    }
`;

const MembersListContainer = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 23px;
    grid-column-gap: 182px;

    @media ${device.mobile} {
        width: 100%;
        grid-row-gap: 24px;
        grid-column-gap: 47px;
    }
`;

const PhotoContainer = styled.div`
    width: 541px;
    height: 288px;
    display: flex;

    @media ${device.desktop}, ${device.desktopS} {
        flex-direction: row-reverse;
    }

    @media ${device.mobile} {
        width: 100%;
        margin-bottom: 53px;
        img {
            width: 342px;
            height: 182px;
        }
    }
`;

/* Query */
const MembersQuery = graphql`
query MembersQuery {
    members {
        edges {
            node {
                id
                firstName
                lastName
                vkLink
                position
            }
        }
    }
}
`;

const bandPhoto = `${BACKEND_URL}/media/settings/band_photo_bio.png`;

const Members = () => (
    <StyledMembers>
        <TitleH1 text={'Участники'} />
        <ContentContainer>
            <QueryRenderer
                environment={environment}
                query={MembersQuery}
                render={({error, props}) => {
                    if (error) return <div>Упс! Ошибка</div>;
                    if (!props) return <Fragment />;
                    if (props) return (
                        <MembersListContainer>
                            {props.members.edges.map(edge => <OneMember
                                key={edge.node.id}
                                title={`${edge.node.firstName} ${edge.node.lastName}`}
                                position={edge.node.position}
                                link={edge.node.vkLink}
                            />)}
                        </MembersListContainer>
                    )
                }}
            />
            <PhotoContainer>
                <img 
                    alt={'фото и напитки'} 
                    src={bandPhoto}
                />
            </PhotoContainer>
        </ContentContainer>
    </StyledMembers>
);

export default Members;