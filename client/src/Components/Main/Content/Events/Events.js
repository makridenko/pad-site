/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import Info from './Info';
import EventsList from './EventsList';

/* Styled components */
const StyledEvents = styled.div`
  /* Position */
  display: flex;
  margin-top: 48px;
`;

const eventList = [
  {date:'24 июня', weekDay:'Суббота', name:'ГОВНАРЬ ГИГ', place:'Гараж'},
  {date:'24 июня', weekDay:'Суббота', name:'ГОВНАРЬ ГИГ', place:'Гараж'},
  {date:'24 июня', weekDay:'Суббота', name:'ГОВНАРЬ ГИГ', place:'Гараж'},
  {date:'24 июня', weekDay:'Суббота', name:'ГОВНАРЬ ГИГ', place:'Гараж'},
  {date:'24 июня', weekDay:'Суббота', name:'ГОВНАРЬ ГИГ', place:'Гараж'},
  {date:'24 июня', weekDay:'Суббота', name:'ГОВНАРЬ ГИГ', place:'Гараж'},
  {date:'24 июня', weekDay:'Суббота', name:'ГОВНАРЬ ГИГ', place:'Гараж'},
]


const Events = () => {
  return (
      <StyledEvents>
        <Info />
        <EventsList
          eventList={eventList}
        />
      </StyledEvents>
  );
};

export default Events;
