import React from "react";
import styled from "styled-components";

const IconLabel = ({ text, style, id, onClick, icon }) => {
  return (
    <StyledIconLabel style={style} id={id} onClick={onClick}>
      {icon}
      <Text>{text}</Text>
    </StyledIconLabel>
  );
};

export default IconLabel;

const StyledIconLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    opacity: 0.5;
  }
`;

const Text = styled.div`
  font-size: 3em;
  color: ${(props) => props.theme.main};
`;
