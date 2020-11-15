import React from "react";
import styled from "styled-components";

const SecondaryBanner = ({ children, style, id }) => {
  return (
    <StyledSecondaryBanner style={style} id={id}>
      {children}
    </StyledSecondaryBanner>
  );
};

export default SecondaryBanner;

const StyledSecondaryBanner = styled.div`
  display: inline-block;
  padding: 0 30px;
  background: ${(props) => props.theme.third};
  color: ${(props) => props.theme.main};
  font-size: 2.4em;
  line-height: 3em;
  height: auto;

  @media (max-width: 600px) {
    line-height: 5rem;
  }
`;
