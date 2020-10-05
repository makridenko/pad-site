/* React components */
import React, { useEffect, useState } from 'react';

/* Components */
import Content from './Content';
import ToggleButtons from './ToggleButtons';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledMain = styled.div`
  
`;

const StyledMainInfo = styled.div`
  /* Dimensions */
  height: 100vh;

  /* Position */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  /* Dimensions */
  width: 100%;

  /* Position */
  position: absolute;
  color: #fff;
  display: flex;
  flex-direction: column;
`;


const Main = ({setBackgroundImageState, setPageHref}) => {
  const [events, setEvents] = useState(true);
  const toggleToEvents = () => setEvents(true);
  const toggleToRelease = () => setEvents(false);

  useEffect(() => {
    setPageHref('/');
    setBackgroundImageState(true);
  });

  return (
    <StyledMain>
      <StyledMainInfo>
        <ContentContainer>
          <ToggleButtons
            events={events}
            toggleToEvents={toggleToEvents}
            toggleToRelease={toggleToRelease}
          />
          <Content
            events={events}
          />
        </ContentContainer>
      </StyledMainInfo>
    </StyledMain>
  );
};

export default Main;
