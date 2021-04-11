/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';
import { Button } from '../../ui-kit/Button';
import { ReactComponent as ArrowRight } from '../../ui-kit/arrow-right.svg';

/* Styled Components */
const NewReleaseContainer = styled.div`
    width: 600px;
    border-top: 1px solid white;
    margin-top: 48px;
    display: flex;
    flex-direction: column;

    @media ${device.mobile} {
        display: none;
    }
`;

const InfoTitleContainer = styled.div`
    @media ${device.desktop} {
        margin-top: 46px;
    }

    @media ${device.mobile} {
        margin-top: 48px;
    }
`;

const Title = styled.p`
    margin: 0;
    color: #656565;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -5%;
`;

const ReleaseTitle = styled.h1`
    margin: 0;
    font-family: Montserrat;
    letter-spacing: -5%;
    color: #FFFFFF;

    @media ${device.desktop} {
        font-weight: 500;
        font-size: 48px;
        line-height: 72px;
    }

    @media ${device.mobile} {
        font-weight: 400;
        font-size: 31px;
        line-height: 48px;
    }
`;

const ContentContainer = styled.div`
    @media ${device.desktop} {
        margin-top: 24px;
    }

    @media ${device.mobile} {
        margin-top: 41px;
    }
`;

const Content = styled.p`
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -5%;
    color: #FFFFFF;
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;

    @media ${device.desktop} {
        flex-direction: row-reverse;
        margin-top: 72px;
    }

    @media ${device.mobile} {
        flex-direction: row;
        margin-top: 48px;
        margin-bottom: 73px;
    }
`;

export const InfoTitle = () => {
    return (
        <InfoTitleContainer>
            <Title>Альбом</Title>
            <ReleaseTitle>фото и напитки 2020</ReleaseTitle>
        </InfoTitleContainer>
    );
};

export const InfoContent = () => {
    return (
        <ContentContainer>
            <Content>
                Описательный текст про содержание альбома описательный текст 
                про содержание альбома описательный текст про содержание альбома 
                описательный текст про содержание альбома  описательный текст 
                про содержание альбома  
            </Content>
            <ButtonContainer>
                <Button
                    svg={<ArrowRight />}
                    text={'Подробнее'}
                />
            </ButtonContainer>
        </ContentContainer>
    );
};

const NewReleaseInfo = () => {
    return (
        <NewReleaseContainer>
            <InfoTitle />
            <InfoContent />
        </NewReleaseContainer>
    );
};

export default NewReleaseInfo;