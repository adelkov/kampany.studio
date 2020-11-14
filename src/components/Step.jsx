import React from 'react'
import styled from "styled-components";


const Step = ({index, text}) => {
  
  return (
    <StyledStep>
      <Index>{index}.</Index>
      <Text>{text}</Text>
    </StyledStep>
  )
};

export default Step


const Index = styled.div`
  color: ${props => props.theme.third};
  font-size: 50px;
`

const Text = styled.div`
  color: ${props => props.theme.white};
  font-size: 30px;
  text-align: center;
`

const StyledStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 14rem;
`