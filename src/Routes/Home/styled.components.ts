import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  @media (max-width: 630px) {
    flex-direction: column;
  }
`;

export const IntroContainer = styled.div`
  background-color: #045de9;
  background-image: linear-gradient(315deg, #045de9 0%, #00ccff 74%);
  width: 65%;
  display: flex;
  flex-direction: column;
  p{
    padding:0 10px;
  }
  @media (max-width: 630px) {
    width: 100%;
    height: 100vh;
  }
`;

export const OptionsContainer = styled.div`
  width: 35%;
  background-color: #fffcfc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 630px) {
    width: 100%;
  }
`;

export const TextTop = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: white;
  font-size: 80px;
  margin: 0;
  letter-spacing: 2px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Name = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: white;
  text-align: center;
  font-size: 120px;
  margin: 3% 0;
  letter-spacing: 10px;
  @media (max-width: 768px) {
    font-size: 70px;
  }
  @media (max-width: 330px) {
    font-size: 50px;
  }
`;
export const Introduction = styled.p`
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 25px;
  font-weight: lighter;
  margin: 0;
  letter-spacing: 2px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  height: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    width: 330px;
    height: 325px;
    border-radius: 50%;
  }
  @media (max-width: 1000px) {
    height: 230px;
    img {
      width: 230px;
      height: 200px;
    }
  }
  @media (max-width: 700px) {
    img {
      width: 90%;
      height: 80%;
    }
  }
  @media (max-width: 630px) {
    img {
      width: 230px;
      height: 200px;
    }
  }
`;

export const ActionsContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Action = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.24);
  box-sizing: border-box;
  border-radius: 5px;
  flex-basis: 43%;
  margin: 2%;
  display: flex;
  height: 180px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    flex-basis: 100%;
    height: 128px;
  }
`;

export const ActionLabel = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
