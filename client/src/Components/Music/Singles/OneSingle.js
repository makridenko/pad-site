/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledOneSingle = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transition: 0.3s;
  }
`;

const LeftContainer = styled.div`
  width: 30%;
  display: flex;
`;

const RightContainer = styled.div`
  width: 70%;
  display: flex;
`;

const CoverImageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 21px;
`;

const CoverImage = styled.img`
  /* Dimensions */
  width: 50px;
  height: 50px;
  margin: 0;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  letter-spacing: -0.05em;

  /* main */

  color: #FFFFFF;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Date = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  letter-spacing: -0.05em;

  /* title/H3 */

  color: #656565;
`;

const ArrowContainer = styled.div`
  margin-left: auto;
  margin-right: 0;
  display: flex;
  align-items: center;
`;

const Arrow = styled.p`
  margin-right: 27px;
`;


const OneSingle = () => {
  return (
    <StyledOneSingle>

      <LeftContainer>
        <CoverImageContainer>
          <CoverImage src='./cover.png' />
        </CoverImageContainer>
        <TitleContainer>
          <Title>летом нельзя плакать</Title>
        </TitleContainer>
      </LeftContainer>

      <RightContainer>
        <DateContainer>
          <Date>13 сентября 2020</Date>
        </DateContainer>
        <ArrowContainer>
          <Arrow>-></Arrow>
        </ArrowContainer>
      </RightContainer>

    </StyledOneSingle>
  );
}

export default OneSingle;
