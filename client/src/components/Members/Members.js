/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import OneMember from './OneMember';

/* Settings */
import { device } from '../../settings/css-devices';

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
    width: 50%;
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



// Test data
const membersData = [
    {title: 'Картер Холл', position: 'барабаны', link: 'https://vk.com/carterrrhall'},
    {title: 'Семен Ремыга', position: 'вокал, гитара, труба, клавиши', link: null},
    {title: 'Кирилл Ивошин', position: 'гитара, вокал', link: null},
    {title: 'Ира Павлова', position: 'вокал, клавиши', link: 'https://vk.com/stuckinreverse'},
    {title: 'Антон Бякин', position: 'труба', link: null},
    {title: 'Егор Жирохов', position: 'бас', link: 'https://vk.com/coolface1337'},
];

const bandPhoto = 'https://source.unsplash.com/541x288/?music,band';


const Members = () => (
    <StyledMembers>
        <TitleH1 text={'Участники'} />
        <ContentContainer>
            <MembersListContainer>
                {membersData.map(member => (
                    <OneMember
                        title={member.title}
                        position={member.position}
                        link={member.link}
                    />
                ))}
            </MembersListContainer>
            <PhotoContainer>
                <img alt={'фото и напитки'} src={bandPhoto} />
            </PhotoContainer>
        </ContentContainer>
    </StyledMembers>
);

export default Members;