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
`;

const PageLink = styled.a`
  width: 65px;
  /* Positions */

  /* Text */
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  line-height: 150%;
  letter-spacing: -0.05em;

  .p {
    top: 50%;
  }

  /* Colors and shadows */
  border-top: ${props => props.active ? '4px solid #fff' : '4px solid rgba(0,0,0,0)'};

  &:hover {
    border-top: 4px solid #fff;
    transition: 0.3s;
  }
`;


const Pages = ({pagesList, pageHref}) => {
  return (
    <PageContainer>
      {pagesList.map((page) =>
        <PageLink 
          href={page.href} 
          key={page.name}
          active={pageHref === page.href ? true : false}
        >
          <p>{page.name}</p>
        </PageLink>
      )}
    </PageContainer>
  );
};

export default Pages;
