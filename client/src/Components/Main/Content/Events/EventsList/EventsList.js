/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import OneEvent from './OneEvent';

/* Styled components */
const StyledEventsList = styled.div`
  /* Dimensions */
  width: 40%;
  height: 432px;

  /* Border */
  border-top: 1px solid #fff;

  /* Text */
  color: #fff;
  
  overflow: scroll;
  overflow-x: hidden;
`;


const EventsList = ({eventList}) => {
  return (
      <StyledEventsList>
        {eventList.map((event) =>
          <OneEvent
            date={event.date}
            weekDay={event.weekDay}
            name={event.name}
            place={event.place}
          />
        )}
      </StyledEventsList>
  );
};

export default EventsList;
