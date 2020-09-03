/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const CopyrightContainer = styled.div`
  /* Dimensions */
  width: 100%;
  height: 100%;
`;

const StyledCopyright = styled.p`
  /* Position */
  margin-top: 23px;
  margin-bottom: 24px;
  margin-left: 120px;

  /* Text */
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 170%;
  letter-spacing: -0.05em;
  color: #fff;
`;


const Copyright = ({text}) => {
  return (
      <CopyrightContainer>
        <StyledCopyright>{text}</StyledCopyright>
      </CopyrightContainer>
  );
};

export default Copyright;
