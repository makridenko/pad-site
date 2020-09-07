/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Components */
import AlbumList from './AlbumList';

/* Styled components */
const StyledAlbums = styled.div`
  width: 87%;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 150%;
  /* identical to box height, or 48px */

  letter-spacing: -0.05em;

  color: #FFFFFF;
`;


const Albums = () => {
  return (
      <StyledAlbums>
        <Title>Альбомы</Title>
        <AlbumList />
      </StyledAlbums>
  );
};

export default Albums;
