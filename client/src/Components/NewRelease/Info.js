/* React components */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledButtonsContainer = styled.div`
  width: 386px;
  display: flex;
  margin-bottom: 50px;
`;

const StyledButtonActive = styled.button`
  height: 48px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  margin: 0;
  border: none;
`;

const StyledButtonInactive = styled.button`
  height: 48px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  background: rgba(0,0,0,0);
  margin: 0;
  border: 1px solid #fff;
`;

const StyledInfo = styled.div`
  color: #fff;
  margin-right: 120px;
  width: 600px;
`;

const Title = styled.p`
  margin: 0;
  border-top: 1px solid #fff;
  padding-top: 46px;
  font-size: 16px;
  color: #656565;
  line-height: 150%;
  letter-spacing: -0.05em;
`;

const AlbumTitle = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.05em;
`;

const Description = styled.p`
  margin-top: 24px;
  margin-bottom: 72px;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.05em;
`;

const AboutButtonContainer = styled.div`
  display: flex;
`;

const AboutButton = styled.button`
  width: 225px;
  height: 48px;
  border: 1px solid #fff;
  border-radius: 0;
  background: rgba(0,0,0,0);
  color: #fff;
  font-size: 16px;
  margin-left: auto;
  font-weight: bold;
`;


const Info = () => {
  return (
    <StyledInfo>
    <StyledButtonsContainer>
        <StyledButtonInactive>Высутпления</StyledButtonInactive>
        <StyledButtonActive>Новый релиз</StyledButtonActive>
    </StyledButtonsContainer>
    <Title>Альбом</Title>
    <AlbumTitle>фото и напитики 2020</AlbumTitle>
    <Description>
      Описательный текст про содержание альбома описательный текст про
      содержание альбома описательный текст про содержание альбома
      описательный текст про содержание альбома описательный текст про
      содержание альбома
    </Description>
    <AboutButtonContainer>
      <AboutButton>Подробнее -></AboutButton>
    </AboutButtonContainer>
    </StyledInfo>
  );
};

export default Info;
