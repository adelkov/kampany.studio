import React from "react";
import styled from "styled-components";

const BodyLight = ({ children, variant = "sm", style, id }) => {
  return (
    <StyledBodyLight style={style} variant={variant} id={id}>
      {children}
    </StyledBodyLight>
  );
};

export default BodyLight;

const StyledBodyLight = styled.div`
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.variant === "sm" && "2.4em"};
  font-size: ${(props) => props.variant === "md" && "3em"};
  font-weight: 400;
  line-height: 1.4em;
`;
