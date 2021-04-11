/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';

/* Styled Components */
const StoryLineContainer = styled.div`
    width: 100%;
    margin-top: 48px;
    border-top: 1px solid #fff;

    @media ${device.mobile} {
        width: 343px;
    }

`;

const OneStoryContainer = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;

    @media ${device.desktop} {
        padding-top: 60px;
        padding-bottom: 73px;
        display: flex;
    }

    @media ${device.mobile} {
        padding-top: 48px;
        padding-bottom: 48px;
        display: flex;
        flex-direction: column;
    }
`;

const YearContainer = styled.div`
    width: 100%;

    h2 {
        color: #FFFFFF;
        margin: 0;
        font-family: Montserrat;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: -5%;
    }

    @media ${device.mobile} {
        margin-bottom: 60px;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    display: flex;

    img {
        width: 346px;
        height: 155px;
    }

    @media ${device.mobile} {
        img {
            width: 343px;
            height: 168px;
        }

        margin-bottom: 48px;
    }
`;

const TextContainer = styled.div`
    width: 100%;

    p {
        color: #FFFFFF;
        margin: 0;
        font-family: Montserrat;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -5%;
    }
`;

const FakeImage = styled.div`
    width: 100%;

    @media ${device.mobile} {
        width: 0;
    }
`;


const OneStory = ({year, photoSrc, text}) => {
    return (
        <OneStoryContainer>
            <YearContainer>
                <h2>{year}</h2>
            </YearContainer>
            {photoSrc ?
                <ImageContainer>
                    <img src={photoSrc} alt={year} />
                </ImageContainer>
                :
                <FakeImage />
            }
            <TextContainer>
                <p>{text}</p>
            </TextContainer>
        </OneStoryContainer>
    );
};

const StoryLine = () => {
    return (
        <StoryLineContainer>
            <OneStory
                year={2017}
                photoSrc={'https://source.unsplash.com/346x155/?music,band'}
                text={'Проект основан в январе 2017 года в городе Пущино Московской области Семеном Ремыгой. Вскоре проект стал дуэтом Семена и Гликерии Березовской и просуществовал в этом статусе до весны 2018 года. В таком составе были выпущены релизы "драм мел о дии", "без меня", "добраться домой" и "надо поговорить". '}
            />
            <OneStory
                year={2018}
                photoSrc={'https://source.unsplash.com/346x155/?music,band'}
                text={'Осенью  2018 года вышел one-man band альбом "все равно уже все равно уже равно нулю". В это же время к проекту присоединяются гитарист Кирилл Ивошин (Linchetti Crew), бассист Егор Жирохов (Linchetti Crew) и барабанщик Николай Дайнеко (Nikky Blazer). '}
            />
            <OneStory
                year={2019}
                photoSrc={'https://source.unsplash.com/346x155/?music,band'}
                text={'31 января 2019 года вышел последний акустический релиз группы, записанный Семеном и Ирой Павловой. С весны 2019 года группа выступает и дает концерты в полном составе. В это же году к группе присоединяется трубач Антон Бякин и меняется барабанщик.'}
            />
            <OneStory
                year={'2020 - настоящее время'}
                text={'Поживем - увидим'}
            />
        </StoryLineContainer>
    );
};

export default StoryLine;