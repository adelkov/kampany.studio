import React from "react";
import styled from "styled-components";

const MainBanner = ({ children, style, id, onClick }) => {
  return (
    <StyledMainBanner onClick={onClick} style={style} id={id}>
      {children}
    </StyledMainBanner>
  );
};

export default MainBanner;

const StyledMainBanner = styled.div`
  text-align: center;
  background: ${(props) => props.theme.main};
  color: ${(props) => props.theme.third};
  font-size: 3.2em;
  height: 126px;
  line-height: 120px;
  padding: 0 30px;
  white-space: nowrap;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border-radius: 14px;
  }
`;
