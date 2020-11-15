import React from 'react'
import styled from "styled-components";


const CAT = ({children, style, id, onClick}) => {
  
  return (
    <StyledCAT style={style} id={id} onClick={onClick}>
      {children}
    </StyledCAT>
  )
};

export default CAT

const StyledCAT = styled.div`
  display: inline-block;
  text-align: center;
  background: ${props => props.theme.main};
  color: ${props => props.theme.third};
  font-size: 2.4em;
  
  border-radius: 15px;
  line-height: 50px;
  height: 54px;
  padding: 0 60px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
  &:active {
    box-shadow: none;
  }
`