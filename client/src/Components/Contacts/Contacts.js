/* React */
import React, {useEffect} from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledContacts = styled.div`
  color: #fff;
`;


const Contacts = ({setBackgroundImageState}) => {
  useEffect(() => setBackgroundImageState(false));
  return (
    <StyledContacts>
      Contacts.js
    </StyledContacts>
  );
};

export default Contacts;
