/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledOneEvent = styled.div`
  /* Dimensions */
  width: 97%;

  /* Border */
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  /* Position */
  margin: 0;
  display: flex;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transition: 0.3s;
  }
`;


const StyledDate = styled.div`
  /* Position */
  margin-top: 24px;
  margin-bottom: 24px;

  /* Text */
  line-height: 150%;
`;

const StyledDateNum = styled.p`
  /* Position */
  padding: 0;
  margin-left: 24px;
  margin-top: 0;
  margin-bottom: 0;

  /* Text */
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

const StyledDateDay = styled.p`
  /* Position */
  padding: 0;
  margin-left: 24px;
  margin-top: 0;
  margin-bottom: 0;



  /* Text */
  font-size: 16px;
  font-weight: bold;
  color: #656565;
`;

const StyledPlace = styled.div`
  /* Position */
  margin-right: 31px;
  margin-left: auto;
  margin-top: 24px;
  margin-bottom: 24px;

  /* Text */
  line-height: 150%;
`;

const StyledEventName = styled.p`
  /* Position */
  padding: 0;
  margin: 0;

  /* Text */
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

const StyledEventPlace = styled.p`
  /* Position */
  padding: 0;
  margin: 0;

  /* Text */
  font-size: 16px;
  font-weight: bold;
  color: #656565;
`;


const OneEvent = ({date, weekDay, name, place}) => {
  return (
      <StyledOneEvent>
        <StyledDate>
          <StyledDateNum>{date}</StyledDateNum>
          <StyledDateDay>{weekDay}</StyledDateDay>
        </StyledDate>
        <StyledPlace>
          <StyledEventName>{name}</StyledEventName>
          <StyledEventPlace>{place}</StyledEventPlace>
        </StyledPlace>
      </StyledOneEvent>
  );
};

export default OneEvent;
