import React from 'react'
import styled from "styled-components";


const BodyLight = ({children}) => {
  
  return (
    <StyledBodyLight>
      {children}
    </StyledBodyLight>
  )
};

export default BodyLight

const StyledBodyLight = styled.div`
  color: ${props => props.theme.white};
  font-size: 3em;
  line-height: 1.4em;
`