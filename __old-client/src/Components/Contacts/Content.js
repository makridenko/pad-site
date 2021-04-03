/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

const StyledContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 160px;
  display: flex;
`;

const StyledName = styled.div`
  margin-right: 59px;
`;

const StyledNameHeader = styled.h1`
  font-size: 32px;
  line-height: 48px;
  font-weight: normal;
  margin: 0;
  padding: 0;
`;

const StyledMail = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  margin: 24px 0;
  padding: 0;
`;

const ContactLink = styled.div`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 5px;
  margin-right: 24px;
`;

const ContactLinkContainer = styled.div`
  display: flex;
`;


const Name = ({firstName, lastName, mail}) => (
  <StyledName>
    <StyledNameHeader>{firstName}{' '}{lastName}</StyledNameHeader>
    <StyledMail>{mail}</StyledMail>
    <ContactLinkContainer>
      <ContactLink />
      <ContactLink />
      <ContactLink />
    </ContactLinkContainer>
  </StyledName>
);


const Content = () => {
  return (
    <StyledContent>
        <Name
          firstName={'Кирилл'}
          lastName={'Ивошин'}
          mail={'ivoshin@mail.ru'}
        />
        <Name
          firstName={'Семен'}
          lastName={'Ремыга'}
          mail={'remiga@mail.ru'}
        />
    </StyledContent>  
  );
};

export default Content;
