/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const AuthorsContainer = styled.div`
  /* Dimensions */
  height: 100%;
  width: 100%;
`;

const StyledAuthors = styled.p`

  /* Position */
  float: right;
  margin-top: 23px;
  margin-bottom: 24px;
  margin-right: 120px;

  /* Text */
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 170%;
  letter-spacing: -0.05em;
  color: #FFFFFF;
`;

const AuthorLink = styled.a`
  /* Border */
  border-bottom: 1px solid #fff;

  /* Text */
  color: #fff;
  text-decoration: none;
`;

const Authors = ({developLink, designLink}) => {
  return (
    <AuthorsContainer>
      <StyledAuthors>
          <AuthorLink href={developLink}>Разработка</AuthorLink> и{' '}
          <AuthorLink href={designLink}>дизайн</AuthorLink> сайта
      </StyledAuthors>
    </AuthorsContainer>
  );
};

export default Authors;
