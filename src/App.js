import React from 'react'
import styled from "styled-components";
import './App.css'
import SecondaryBanner from "./components/SecondaryBanner";
import MainBanner from "./components/MainBanner";
import OutlinedBanner from "./components/OutlinedBanner";
import Step from "./components/Step";
import BodyLight from "./components/BodyLight";
import CAT from "./components/CAT";


function App() {

  
  return (
    <Back>
      <AppContainer>
        <div style={{ gridArea: '1 / 1 / 1 / 2' }}>
          <MainBanner>kampany.studio</MainBanner>
        </div>
        <div style={{ gridArea: '1 / 3 / 1 / 4', justifySelf: 'end' }}>
          <OutlinedBanner id={'christmas-banner'}>Nyakunkon a karácsony!</OutlinedBanner>
        </div>
        <div style={{ gridArea: '2 / 1 / 3 / 4', justifySelf: 'start', alignSelf: 'center' }}>
          <BodyLight>Kampánytervezés és kivitelezés.
          </BodyLight>
          <BodyLight> Hogy eljusson a híred azokhoz, akiknek szükségük van rád.</BodyLight>
        </div>
        <div style={{ gridArea: '3 / 1 / 4 / 4', justifySelf: 'start' }}>
          <SecondaryBanner id={'subtitle'}>A Kampany Studio segít vállalkozásodnak a gyors és hatékony kommunikációban.
          </SecondaryBanner>
        </div>
        <div style={{ gridArea: '4 / 1 / 5 / 2', justifySelf: 'center'}}>
          <Step index={1} text={"Fogalmazzuk meg a problémát!"} />
        </div>
        <div style={{ gridArea: '4 / 2 / 5 / 3', justifySelf: 'center'}}>
          <Step index={2} text={"Készítsünk egyedi kampánytervet!"} />
        </div>
        <div style={{ gridArea: '4 / 3 / 5 / 4', justifySelf: 'center'}}>
          <Step index={3} text={"Valósítsuk meg!"} />
        </div>
        <div style={{ gridArea: '5 / 2 / 6 / 3', justifySelf: 'center', alignSelf: 'center'}}>
          <CAT>Készen állsz?</CAT>
        </div>
      </AppContainer>
    </Back>
  )
}

export default App

const Back = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.second};
`

const AppContainer = styled.div`
  padding: 3rem;
  height: calc(100vh - 6rem);
  width: 1170px;
  background: ${props => props.theme.second};
  // box-shadow:
  //0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  //0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  //0 12.5px 10px rgba(0, 0, 0, 0.06),
  //0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  //0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  //0 100px 80px rgba(0, 0, 0, 0.12);
  
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
`
