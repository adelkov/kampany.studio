import React, { useEffect } from "react";
import styled from "styled-components";
// import gsap from "gsap";
import MainBanner from "../components/MainBanner";
import BodyLight from "../components/BodyLight";
import SecondaryBanner from "../components/SecondaryBanner";
import IconLabel from "../components/IconLabel";
import { ReactComponent as PhoneIcon } from "../svg/phone.svg";
import { ReactComponent as EnvelopeIcon } from "../svg/mail.svg";
import { useCustomTheme } from "../context/theme";
import { useHistory } from "react-router-dom";

function Contact() {
  const history = useHistory();
  const { theme } = useCustomTheme();

  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  return (
    <Back id={"back"}>
      <ContactContainer>
        <MainBanner id={"main-title"} onClick={() => history.push("/")}>
          kampany.studio
        </MainBanner>
        <img
          style={{
            gridArea: "1 / 2 / 3 / 4",
            width: "200px",
            justifySelf: "end",
          }}
          src="gif/Untitled-1.gif"
          alt="phone"
        />
        <BodyLight
          id={"contact-me"}
          style={{ gridArea: "2 / 1 / 3 / 3", alignSelf: "center" }}
          variant={"md"}
        >
          Vedd fel velem a kapcsolatot!
        </BodyLight>
        <SecondaryBanner
          style={{
            gridArea: "3 / 1 / 4 / 4",
            justifySelf: "center",
            alignSelf: "center",
          }}
        >
          Baráth Réka
        </SecondaryBanner>
        <a
          style={{
            color: "inherit",
            textDecoration: "none",
            width: "100%",
            gridArea: "4 / 1 / 5 / 4",
          }}
          href="mailto:missrekabarath@gmail.com"
        >
          <IconLabel
            text={"missrekabarath@gmail.com"}
            icon={<EnvelopeIcon style={{ width: "5rem" }} fill={theme.main} />}
          />
        </a>
        <a
          style={{
            color: "inherit",
            textDecoration: "none",
            width: "100%",
            gridArea: "5 / 1 / 6 / 4",
          }}
          href="tel:0036303808584"
        >
          <IconLabel
            text={"+36 30 380 85 84"}
            icon={<PhoneIcon style={{ width: "4rem" }} fill={theme.main} />}
          />
        </a>
      </ContactContainer>
    </Back>
  );
}

export default Contact;

const Back = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.second};

  @media (max-width: 600px) {
    height: auto;
  }
`;

const ContactContainer = styled.div`
  padding: 5rem;
  height: calc(100vh - 10rem);
  max-height: 800px;
  width: 1170px;
  background: ${(props) => props.theme.second};

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  column-gap: 10px;
  row-gap: 10px;

  & #main-title {
    justify-self: start;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 1200px;
    overflow: scroll;

    & #contact-me {
      text-align: center;
    }
  }
`;
