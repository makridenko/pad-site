/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledInfo = styled.div`
  /* Dimensions */
  width: 50%;

  /* Position */
  display: flex;
  justify-content: center;
`;

const StyledText = styled.p`
  /* Dimensions */
  width: 445px;

  /* Position */
  margin-bottom: 0;

  /* Text */
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: -0.05em;
  color: #FFFFFF;
`;


const Info = () => {
  return (
      <StyledInfo>
        <StyledText>
          Здесь должен быть какой-то текст на пару строк, может быть на даже на
          три, а может и на все четыре, я хз
        </StyledText>
      </StyledInfo>
  );
};

export default Info;
