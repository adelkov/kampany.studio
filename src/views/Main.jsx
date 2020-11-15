import React, { useEffect } from "react";
import styled from "styled-components";
import SecondaryBanner from "../components/SecondaryBanner";
import MainBanner from "../components/MainBanner";
import OutlinedBanner from "../components/OutlinedBanner";
import Step from "../components/Step";
import BodyLight from "../components/BodyLight";
import CAT from "../components/CAT";
import gsap from "gsap";
import { useHistory } from "react-router-dom";

function Main() {
  const history = useHistory();

  useEffect(() => {
    gsap
      .timeline({ defaults: { opacity: 0, ease: "back" } })
      .from("#back", { duration: 0.5 })
      .from("#main-title", { x: -300 }, "-=0.5")
      .from(
        "#xmas",
        {
          ease: "linear",
          repeatDelay: 0.1,
          scale: 1.2,
          repeat: -1,
          yoyoEase: true,
          opacity: 1,
          duration: 0.2,
        },
        "<"
      )
      .from("#sub-title", { x: -200 }, "<")
      .from("#secondary-banner", { x: 200 }, "-=0.2")
      .from(".step", { y: 400, stagger: 0.1 }, "<")
      .from("#cta", { y: 400 }, "-=0.2");
  }, []);

  return (
    <Back id={"back"}>
      <MainContainer>
        <MainBanner
          id={"main-title"}
          style={{ gridArea: "1 / 1 / 1 / 3", justifySelf: "start" }}
        >
          kampany.studio
        </MainBanner>
        <OutlinedBanner
          id={"xmas"}
          style={{ gridArea: "1 / 3 / 1 / 4", justifySelf: "end" }}
        >
          Nyakunkon a karácsony!
        </OutlinedBanner>
        <div
          id={"sub-title"}
          style={{
            gridArea: "2 / 1 / 3 / 4",
            justifySelf: "start",
            alignSelf: "center",
          }}
        >
          <BodyLight>Kampánytervezés és kivitelezés.</BodyLight>
          <BodyLight>
            {" "}
            Hogy eljusson a híred azokhoz, akiknek szükségük van rád.
          </BodyLight>
        </div>
        <SecondaryBanner
          id={"secondary-banner"}
          style={{
            gridArea: "3 / 1 / 4 / 4",
            justifySelf: "start",
            alignSelf: "start",
          }}
        >
          A Kampany Studio segít vállalkozásodnak a gyors és hatékony
          kommunikációban.
        </SecondaryBanner>
        <Step
          className={"step"}
          style={{ gridArea: "4 / 1 / 5 / 2", justifySelf: "center" }}
          index={1}
          text={"Fogalmazzuk meg a problémát!"}
        />
        <Step
          className={"step"}
          style={{ gridArea: "4 / 2 / 5 / 3", justifySelf: "center" }}
          index={2}
          text={"Készítsünk egyedi kampánytervet!"}
        />
        <Step
          className={"step"}
          style={{ gridArea: "4 / 3 / 5 / 4", justifySelf: "center" }}
          index={3}
          text={"Valósítsuk meg!"}
        />
        <CAT
          onClick={() => history.push("/contact")}
          id={"cta"}
          style={{
            gridArea: "5 / 2 / 6 / 3",
            justifySelf: "center",
            alignSelf: "center",
          }}
        >
          Készen állsz?
        </CAT>
      </MainContainer>
    </Back>
  );
}

export default Main;

const Back = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.second};
`;

const MainContainer = styled.div`
  padding: 5rem;
  height: calc(100vh - 10rem);
  max-height: 1000px;
  width: 1170px;
  background: ${(props) => props.theme.second};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  //@media (max-width: 75em) {
  //  height: auto;
  //  display: flex;
  //  flex-direction: column;
  //  align-items: center;
  //  justify-content: center;
  //   }
`;