import React from "react";
import styled from "styled-components";

const Logo = ({}) => {
  return (
    <LogoWrapper>
      <img
        id={"mobile-logo"}
        src="img/yellow-pink-rombus.png"
        alt="yellow logo"
        width={"80%"}
      />
      <img
        id={"desktop-logo"}
        src="img/yellow-square.png"
        alt="yellow logo"
        width={"80%"}
      />
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & #desktop-logo {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    width: 180px;
  }

  & #mobile-logo {
    display: none;
  }

  @media (max-width: 600px) {
    & #desktop-logo {
      display: none;
    }
    & #mobile-logo {
      display: block;
      width: 80%;
    }
  }
`;
