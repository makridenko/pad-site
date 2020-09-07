/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledAlbumList = styled.div`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  width: auto;
  padding-bottom: 48px;
`;

const StyledCoverImage = styled.img`
  /* Dimensions */
  width: 240px;
  height: 240px;
  margin-right: 25px;

  &:hover {
    filter: blur(4px);
    transition: 0.4s;
  }
`;


const AlbumList = () => {
  return (
      <StyledAlbumList>
        <StyledCoverImage src='./cover.png' />
        <StyledCoverImage src='./cover.png' />
        <StyledCoverImage src='./cover.png' />
        <StyledCoverImage src='./cover.png' />
        <StyledCoverImage src='./cover.png' />
        <StyledCoverImage src='./cover.png' />
        <StyledCoverImage src='./cover.png' />
        <StyledCoverImage src='./cover.png' />
        <StyledCoverImage src='./cover.png' />
      </StyledAlbumList>
  );
};

export default AlbumList;
