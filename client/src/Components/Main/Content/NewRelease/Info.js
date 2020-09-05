/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import Button from '../../../ReusableComponents/Button';

/* StyledComponents */
const StyledInfo = styled.div`
  /* Dimensions */
  width: 40%;
  height: 432px;

  /* Border */
  border-top: 1px solid #fff;

  /* Text */
  color: #fff;
`;

const Title = styled.p`
  /* Position */
  margin: 0;
  padding-top: 46px;

  /* Text */
  font-size: 16px;
  color: #656565;
  line-height: 150%;
  letter-spacing: -0.05em;
`;

const AlbumTitle = styled.h1`
  /* Position */
  margin: 0;

  /* Text */
  font-size: 48px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.05;
`;

const Description = styled.p`
  /* Position */
  margin-top: 24px;
  margin-bottom: 72px;

  /* Text */
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.05em;
`;

const AboutButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;


const Info = () => {
  return (
    <StyledInfo>
      <Title>Альбом</Title>
      <AlbumTitle>фото и напитики 2020</AlbumTitle>
      <Description>
        Описательный текст про содержание альбома описательный текст про
        содержание альбома описательный текст про содержание альбома
        описательный текст про содержание альбома описательный текст про
        содержание альбома
      </Description>
      <AboutButtonContainer>
        <Button text={'Подробнее ->'}/>
      </AboutButtonContainer>
    </StyledInfo>
  );
};

export default Info;
