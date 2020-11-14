import React from 'react'
import styled from "styled-components";


const MainBanner = ({children}) => {
  
  return (
    <StyledMainBanner>
      {children}
    </StyledMainBanner>
  )
};

export default MainBanner

const StyledMainBanner = styled.div`
  display: inline-block;
  text-align: center;
  background: ${props => props.theme.main};
  color: ${props => props.theme.third};
  font-size: 50px;
  height: 126px;
  line-height: 120px;
  padding: 0 30px;
  white-space: nowrap;
  font-weight: 700;
`