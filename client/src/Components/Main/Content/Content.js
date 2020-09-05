/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import Events from './Events';
import NewRelease from './NewRelease';

/* Styled components */
const StyledContent = styled.div`
`;


const Content = () => {
  return (
    <StyledContent>
      <Events />
    </StyledContent>
  );
};

export default Content;
