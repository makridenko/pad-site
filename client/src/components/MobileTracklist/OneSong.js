/* React */
import React, { useState } from 'react';

/* Styles */
import styled from 'styled-components';
import { Paragraph, TitleH3 } from '../../ui-kit/typography';

/* Styled Components */
const StyledOneSong = styled.div`
    cursor: pointer;
`;

const TitleContainer = styled.div`
    margin-top: 12px;

    h3 {
        color: ${props => props.isOpen ? '#fff' : 'none'};
    }
`;

const LyricsContainer = styled.div`
    display: ${props => props.isOpen ? 'flex' : 'none'};
    transition: 0.5s;
    margin-top: 24px;
    margin-bottom: 96px;
`;

// Fake data
const text = `Порой зеленых чистых листьев,
Где до рассвета стелется туман,
Закаты теплые так близко,
Моих фантазий красочный фонтан.

В эту пору почувствуешь дыханье,
Дыханье ветра - с ним не совладать.
Поля цветов, исполнятся желанья,
Не нужно так страдать.

Дорога стелется во мраке,
Кругом разлуки, суета и драки,
Осень вернет уныние и слякоть,
Но летом нельзя плакать.

Ходить быстрее, верить так уперто,
Что просто цели выльются в мечты.
Даром не нужно - посылаю к черту,
Не видя красоты.

Порой зеленых чистых листьев,
Где до рассвета стелется туман,
К закатам теплым прикоснись ты,
На зиму положи в карман.

Дорога стелется во мраке,
Кругом разлуки, суета и драки,
Осень вернет уныние и слякоть,
Но летом нельзя плакать.
`;

export const OneSong = ({title, lyrics}) => {

    // Hook for open song lyrics
    const [lyricsOpen, setOpen] = useState(false);

    // Method for toggle lyrics
    const _toggleLyrics = () => setOpen(!lyricsOpen);

    return (
        <StyledOneSong>
            <TitleContainer onClick={() => _toggleLyrics()} isOpen={lyricsOpen}>
                <TitleH3 text={title} />
            </TitleContainer>
            <LyricsContainer isOpen={lyricsOpen}>
                <Paragraph pre text={text} />
            </LyricsContainer>
        </StyledOneSong>
    );
};