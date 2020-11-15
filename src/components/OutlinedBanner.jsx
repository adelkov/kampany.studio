import React from 'react'
import styled from "styled-components";


const OutlinedBanner = ({children, style, id}) => {

  
  return (
    <StyledOutlinedBanner id={id} style={style}>
      {children}
    </StyledOutlinedBanner>
  )
};

export default OutlinedBanner

const StyledOutlinedBanner = styled.div`
  word-wrap: break-word;
  width: 15rem;
  text-align: center;
  color: ${props => props.theme.main};
  font-size: 2.4em;
  height: 126px;
  padding: 0 30px;
  text-shadow: 0 4px 4px rgba(0, 58, 92, 0.25);
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 6px solid ${props => props.theme.main};
  box-shadow: 3px 3px 0 0 rgba(0, 58, 92, 0.25),
              3px 3px 0 0 rgba(0, 58, 92, 0.25) inset;
  border-radius: 15px;
  
  cursor:pointer;
  transition: all .5s;
  &:hover {
    background: ${props => props.theme.main};
    color: ${props => props.theme.white};
  }
  
  &:active {
    background: transparent;
    color: ${props => props.theme.main};
  }
`