/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import OneStory from './OneStory';

/* Styled Components */
const StoryLineContainer = styled.div`
    width: 100%;
    margin-top: 48px;
    border-top: 1px solid #fff;
`;

// Fake data
const data = [
    {
        year: 2017,
        photoSrc: 'https://source.unsplash.com/346x155/?music,band',
        text: 'Проект основан в январе 2017 года в городе Пущино Московской области Семеном Ремыгой. Вскоре проект стал дуэтом Семена и Гликерии Березовской и просуществовал в этом статусе до весны 2018 года. В таком составе были выпущены релизы "драм мел о дии", "без меня", "добраться домой" и "надо поговорить". ',
    },
    {
        year: 2018,
        photoSrc: 'https://source.unsplash.com/346x155/?music,band',
        text: 'Осенью  2018 года вышел one-man band альбом "все равно уже все равно уже равно нулю". В это же время к проекту присоединяются гитарист Кирилл Ивошин (Linchetti Crew), бассист Егор Жирохов (Linchetti Crew) и барабанщик Николай Дайнеко (Nikky Blazer). ',
    },
    {
        year: 2019,
        photoSrc: 'https://source.unsplash.com/346x155/?music,band',
        text: '31 января 2019 года вышел последний акустический релиз группы, записанный Семеном и Ирой Павловой. С весны 2019 года группа выступает и дает концерты в полном составе. В это же году к группе присоединяется трубач Антон Бякин и меняется барабанщик.',
    },
    {
        year: '2020 - настоящее время',
        text:'Поживем - увидим',
    }
];

const StoryLine = () => (
    <StoryLineContainer>
        {data.map(story => (
            <OneStory
                year={story.year}
                photoSrc={story.photoSrc}
                text={story.text}
            />
        ))}
    </StoryLineContainer>
);

export default StoryLine;