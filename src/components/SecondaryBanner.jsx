import React from 'react'
import styled from "styled-components";


const SecondaryBanner = ({children}) => {

    return (
        <StyledSecondaryBanner>
          {children}
        </StyledSecondaryBanner>
    )
};

export default SecondaryBanner

const StyledSecondaryBanner = styled.div`
  display: inline-block;
  padding: 0 30px;
  background: ${props => props.theme.third};
  color: ${props => props.theme.main};
  font-size: 30px;
  line-height: 80px;
  height: 82px;
`