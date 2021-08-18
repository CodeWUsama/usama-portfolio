import React from "react";
import {
  MainContainer,
  IntroContainer,
  OptionsContainer,
  TextTop,
  Name,
  Introduction,
  ImageContainer,
  ActionsContainer,
  Action,
  ActionLabel,
} from "./styled.components";

const HomePage: React.FC = () => {
  return (
    <MainContainer>
      <IntroContainer>
        <TextTop>SOFTWARE ENGINEER</TextTop>
        <Name>
          Usama
          <br />
          Bilal
        </Name>
        <Introduction>
          Passionate application developer currently working as a <br /> React
          Developer in Embrace-IT Pakistan
        </Introduction>
      </IntroContainer>
      <OptionsContainer>
        <ImageContainer>
          <img
            src={process.env.PUBLIC_URL + "/Images/usama.png"}
            alt="Usama Picture"
          />
        </ImageContainer>
        <ActionsContainer>
          <Action>
            <img
              src={process.env.PUBLIC_URL + "/Icons/skills.png"}
              alt="Skills Icon"
            />
            <ActionLabel>Skills</ActionLabel>
          </Action>
          <Action>
            <img
              src={process.env.PUBLIC_URL + "/Icons/projects.png"}
              alt="Projects Icon"
            />
            <ActionLabel>Projects</ActionLabel>
          </Action>
          <Action>
            <img
              src={process.env.PUBLIC_URL + "/Icons/about.png"}
              alt="About Icon"
            />
            <ActionLabel>About</ActionLabel>
          </Action>
          <Action>
            <img
              src={process.env.PUBLIC_URL + "/Icons/contact.png"}
              alt="Contact Icon"
            />
            <ActionLabel>Contact</ActionLabel>
          </Action>
        </ActionsContainer>
      </OptionsContainer>
    </MainContainer>
  );
};

export default HomePage;
