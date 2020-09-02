/* React components */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledName = styled.p`
  font-size: 60px;
  margin-top: 0px;
`;

const StyledText = styled.p`
  margin-top: 36px;
  font-size: 16px;
  width: 453px;
`;

const StyledMainInfo = styled.div`
  color: #fff;
  padding-left: 120px;
  width: 720px;
`;

const MainInfo = () => {
  return (
    <StyledMainInfo>
      <StyledName>фото и напитики</StyledName>
      <StyledText>
       Здесь должен быть какой-то текст на пару строк, может быть на
       даже на три, а может и на все четыре, я хз
      </StyledText>
    </StyledMainInfo>
  );
};

export default MainInfo;
