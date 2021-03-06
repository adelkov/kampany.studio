import React from "react";
import styled from "styled-components";

const Step = ({ index, text, style, className }) => {
  return (
    <StyledStep className={className} style={style}>
      <Index>{index}.</Index>
      <Text>{text}</Text>
    </StyledStep>
  );
};

export default Step;

const Index = styled.div`
  color: ${(props) => props.theme.third};
  font-size: 3.2em;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  justify-self: flex-start;
`;

const Text = styled.div`
  color: ${(props) => props.theme.white};
  font-size: 2.4em;
  text-align: center;
  justify-self: start;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledStep = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 14rem;

  @media (max-width: 600px) {
    max-width: 20rem;
  }
`;
