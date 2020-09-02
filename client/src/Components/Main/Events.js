/* React components */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledEvents = styled.div`
`;

const StyledButtonsContainer = styled.div`
  width: 386px;
  display: flex;
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

const EventsList = styled.div`
  border-top: 1px solid #fff;
  width: 597px;
  height: 432px;
  margin-top: 48px;
  overflow: scroll;
  color: #fff;
`;

const StyledOneEvent = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

const StyledDate = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  line-height: 150%;
`;

const StyledDateNum = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

const StyledDateDay = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #656565;
`;

const StyledPlace = styled.div`
  margin-right: 31px;
  margin-left: auto;
  margin-top: 24px;
  margin-bottom: 24px;
  line-height: 150%;
`;

const StyledEventName = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

const StyledEventPlace = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #656565;
`;


const OneEvent = () => {
  return (
    <StyledOneEvent>
      <StyledDate>
        <StyledDateNum>6 июня</StyledDateNum>
        <StyledDateDay>Суббота</StyledDateDay>
      </StyledDate>
      <StyledPlace>
        <StyledEventName>TWINKLISH GIG</StyledEventName>
        <StyledEventPlace>Punk Fiction</StyledEventPlace>
      </StyledPlace>
    </StyledOneEvent>
  );
};

const Events = () => {
  return (
    <StyledEvents>
      <StyledButtonsContainer>
        <StyledButtonActive>Высутпления</StyledButtonActive>
        <StyledButtonInactive>Новый релиз</StyledButtonInactive>
      </StyledButtonsContainer>
      <EventsList>
        <OneEvent />
        <OneEvent />
        <OneEvent />
        <OneEvent />
        <OneEvent />
        <OneEvent />
        <OneEvent />
        <OneEvent />
      </EventsList>
    </StyledEvents>
  );
};

export default Events;
