/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StyledMembers = styled.div`
    width: 100%;
    margin-top: 157px;
    margin-bottom: 97px;

    @media ${device.mobile} {
        width: 343px;
        margin-top: 120px;
        margin-bottom: 0;
    }
`;

const Title = styled.h1`
    margin: 0;
    margin-bottom: 49px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -5%;
    color: #FFFFFF;
`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media ${device.mobile} {
        flex-direction: column-reverse;
    }
`;

const MembersListContainer = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    @media ${device.desktop} {
        grid-row-gap: 23px;
        grid-column-gap: 182px;
    }

    @media ${device.mobile} {
        width: 100%;
        grid-row-gap: 24px;
        grid-column-gap: 47px;
    }
`;

const PhotoContainer = styled.div`
    width: 50%;
    display: flex;

    @media ${device.desktop} {
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

const MemberName = styled.p`
    margin: 0;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 16px;
    line-height: 24%;
    letter-spacing: -5%;
    color: #FFFFFF;
`;

const Position = styled.p`
    margin-top: 6px;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -5%;
    color: #656565;
`;

const OneMemberContainer = styled.div`
    a {
        text-decoration-line: underline;
        color: #fff;
    }
`;


const OneMember = ({title, position, link}) => {
    return (
        <OneMemberContainer>
            {link ?
                <MemberName><a href={link}>{title}</a></MemberName>
                :
                <MemberName>{title}</MemberName>
            }
            <Position>{position}</Position>
        </OneMemberContainer>
    )
};


const Members = () => {
    return (
        <StyledMembers>
            <Title>Участники</Title>
            <ContentContainer>
                <MembersListContainer>
                    <OneMember
                        title={'Картер Холл'}
                        position={'барабаны'}
                        link={'https://vk.com/carterrrhall'}
                    />
                    <OneMember
                        title={'Семен Ремыга'}
                        position={'вокал, гитара, труба, клавиши'}
                    />
                    <OneMember
                        title={'Кирилл Ивошин'}
                        position={'гитара, вокал'}
                    />
                    <OneMember
                        title={'Ира Павлова'}
                        position={'вокал, клавиши'}
                        link={'https://vk.com/stuckinreverse'}
                    />
                    <OneMember
                        title={'Антон Бякин'}
                        position={'труба'}
                    />
                    <OneMember
                        title={'Егор Жирохов'}
                        position={'бас'}
                        link={'https://vk.com/coolface1337'}
                    />
                </MembersListContainer>
                <PhotoContainer>
                    <img
                        alt={'фото и напитки'}
                        src={'https://source.unsplash.com/541x288/?music,band'}
                    />
                </PhotoContainer>
            </ContentContainer>
        </StyledMembers>
    );
};

export default Members;