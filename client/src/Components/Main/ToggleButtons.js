/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import Button from '../ReusableComponents/Button';


/* Styled components */
const StyledToggleButtons = styled.div`
  /* Position */
  display: flex;
`;

const TitleContainer = styled.div`
  /* Position */
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  /* Dimensions */
  width: 445px;

  /* Position */
  margin-top: 0;
  margin-bottom: 0;

  /* Text */
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: #FFFFFF;
`;

const ButtonContainer = styled.div`
  /* Dimensions */
  width: 100%;

  /* Position */
  display: flex;
`;


const ToggleButtons = () => {
  return (
    <StyledToggleButtons>
      <TitleContainer>
        <Title>фото и напитки</Title>
      </TitleContainer>
      <ButtonContainer>
        <Button text={'Выступления'} />
        <Button text={'Новый релиз'} />
      </ButtonContainer>
    </StyledToggleButtons>
  );
};

export default ToggleButtons;
