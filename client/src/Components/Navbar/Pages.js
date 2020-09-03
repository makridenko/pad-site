/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const PageContainer = styled.div`
  /* Dimensions */
  width: 100%;

  /* Position */
  display: grid;
  grid-auto-flow: column;
  padding-top: 20px;
  padding-bottom: 23px;
`;

const PageLink = styled.a`
  /* Text */
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  line-height: 150%;
  letter-spacing: -0.05em;
`;


const Pages = ({pagesList}) => {
  return (
    <PageContainer>
      {pagesList.map((page) =>
        <PageLink href={page.href}>{page.name}</PageLink>
      )}
    </PageContainer>
  );
};

export default Pages;
