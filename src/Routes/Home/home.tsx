import React, { useState } from "react";
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
  IntroWrapper,
  ArrowWrapper,
} from "./styled.components";
import { useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Typist from "react-typist";
import Button from "../../Components/Button/button";

const HomePage: React.FC = () => {
  const [hoveredAction, setHoveredAction] = useState<string>("");
  const History = useHistory();

  return (
    <MainContainer>
      <ReactTooltip place="top" effect="solid" type="info" />
      <IntroContainer>
        <IntroWrapper>
          <TextTop>SOFTWARE ENGINEER</TextTop>
          <Name>
            USAMA
            <br />
            BILAL
          </Name>
          <Typist cursor={{ show: false }}>
            <Introduction>
              Passionate application developer currently working as a <br />{" "}
              React Developer in Embrace-IT Pakistan
            </Introduction>
          </Typist>
          <Button
            text="View Usama's Resume"
            marginTop={30}
            onClick={() => {
              window.open("/Documents/Usama-bilal-resume.pdf", "_blank");
            }}
          />
        </IntroWrapper>
      </IntroContainer>
      <OptionsContainer>
        <ImageContainer>
          <img src={process.env.PUBLIC_URL + "/Images/usama.png"} alt="Usama" />
        </ImageContainer>
        <ActionsContainer>
          <Action
            onClick={() => History.push("/expertise")}
            data-tip="Go to Skills page"
            onMouseEnter={() => setHoveredAction("skills")}
            onMouseLeave={() => setHoveredAction("")}
          >
            <ArrowWrapper>
              {hoveredAction === "skills" ? (
                <img
                  src={process.env.PUBLIC_URL + "/Icons/arrow.png"}
                  alt="Arrow Icon"
                />
              ) : null}
            </ArrowWrapper>
            <img
              src={process.env.PUBLIC_URL + "/Icons/skills.png"}
              alt="Skills Icon"
            />
            <ActionLabel>Expertise</ActionLabel>
          </Action>
          <Action
            data-tip="Go to Projects page"
            onMouseEnter={() => setHoveredAction("projects")}
            onMouseLeave={() => setHoveredAction("")}
          >
            <ArrowWrapper>
              {hoveredAction === "projects" ? (
                <img
                  src={process.env.PUBLIC_URL + "/Icons/arrow.png"}
                  alt="Arrow Icon"
                />
              ) : null}
            </ArrowWrapper>

            <img
              src={process.env.PUBLIC_URL + "/Icons/projects.png"}
              alt="Projects Icon"
            />
            <ActionLabel>Projects</ActionLabel>
          </Action>
          <Action
            data-tip="Go to About page"
            onMouseEnter={() => setHoveredAction("about")}
            onMouseLeave={() => setHoveredAction("")}
          >
            <ArrowWrapper>
              {hoveredAction === "about" ? (
                <img
                  src={process.env.PUBLIC_URL + "/Icons/arrow.png"}
                  alt="Arrow Icon"
                />
              ) : null}
            </ArrowWrapper>
            <img
              src={process.env.PUBLIC_URL + "/Icons/about.png"}
              alt="About Icon"
            />
            <ActionLabel>About</ActionLabel>
          </Action>
          <Action
            data-tip="Go to Contact page"
            onMouseEnter={() => setHoveredAction("contact")}
            onMouseLeave={() => setHoveredAction("")}
          >
            <ArrowWrapper>
              {hoveredAction === "contact" ? (
                <img
                  src={process.env.PUBLIC_URL + "/Icons/arrow.png"}
                  alt="Arrow Icon"
                />
              ) : null}
            </ArrowWrapper>
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
