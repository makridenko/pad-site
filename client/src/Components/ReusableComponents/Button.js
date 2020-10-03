/* React */
import React from 'react';

/* Style */
import styled from 'styled-components';

const StyledButton = styled.button`
  /* Dimensions */
  width: 193px;
  height: 48px;

  /* Position */
  margin: 0;

  /* Border */
  border: 1px solid #fff;

  /* Color */
  background: ${props => props.enabled ? '#fff' : 'rgba(0,0,0,0)'};

  /* Text */
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.enabled ? '#000' : '#fff'};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transition: 0.3s;
  }
`;


const Button = ({text, enabled, onClick}) => {
  return (
    <StyledButton enabled={enabled} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
