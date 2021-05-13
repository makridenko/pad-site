/* React */
import React, { Fragment } from 'react';

/* Styles */
import styled from 'styled-components';

/* Settings */
import { device } from '../../settings/css-devices';

/* UI-Kit */
import { TitleH2, Paragraph } from '../../ui-kit/typography';

/* Styled Components */
const OneStoryContainer = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    width: 100%;
    padding-top: 60px;
    padding-bottom: 73px;
    display: flex;

    @media ${device.mobile} {
        padding-top: 48px;
        padding-bottom: 48px;
        flex-direction: column;
    }
`;

const Container = styled.div`
    width: 100%;

    img {
        width: 346px;
        height: 155px;
    }

    @media ${device.mobile} {
        img {
            width: 343px;
            height: 168px;
            margin-bottom: 48px;
        }

        h2 {
            margin-bottom: 60px;
        }
    }
`;


const OneStory = ({year, photoSrc, text}) => (
    <OneStoryContainer>
        <Container>
            <TitleH2 text={year} />
        </Container>
        <Container>
            {photoSrc ? <img src={'http://localhost:8000/media/' + photoSrc} alt={year} /> : <Fragment />}
        </Container>
        <Container>
            <Paragraph text={text} />
        </Container>
    </OneStoryContainer>
);

export default OneStory;