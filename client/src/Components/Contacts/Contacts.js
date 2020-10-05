/* React */
import React, {useEffect} from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import Content from './Content';

/* Styled components */
const StyledContacts = styled.div`
  color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Contacts = ({setBackgroundImageState, setPageHref}) => {
  useEffect(() => {
    setPageHref('/contacts');
    setBackgroundImageState(false);
  });
  return (
    <StyledContacts>
      <Content />
    </StyledContacts>
  );
};

export default Contacts;
