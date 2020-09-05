/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const SocialMediaContainer = styled.div`
  /* Position */
  display: grid;
  grid-auto-flow: column;
  padding-right: 120px;
  padding-left: 352px;
  padding-top: 19px;
  padding-bottom: 21px;
`;

const SocialMediaLogo = styled.div`
  /* Dimensions */
  width: 24px;
  height: 24px;

  /* Position */
  margin-right: 16px;

  /* Border */
  border-radius: 5px;

  /* Color */
  background: #fff;
`;


const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <SocialMediaLogo />
      <SocialMediaLogo />
    </SocialMediaContainer>
  );
};

export default SocialMedia;
