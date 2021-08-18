import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

export const IntroContainer = styled.div`
  background-color: #045de9;
  background-image: linear-gradient(315deg, #045de9 0%, #00ccff 74%);
  width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const OptionsContainer = styled.div`
  width: 35%;
  background-color: #fffcfc;
`;

export const TextTop = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: white;
  font-size: 80px;
  margin: 0;
  letter-spacing: 2px;
  text-align: center;
`;

export const Name = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  color: white;
  text-align: center;
  font-size: 130px;
  margin: 3% 0;
`;
export const Introduction = styled.p`
  font-family: "Roboto", sans-serif;
  color: white;
  font-size: 25px;
  font-weight: lighter;
  margin: 0;
  letter-spacing: 2px;
  text-align: center;
`;

export const ImageContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    width: 330px;
    height: 325px;
    border-radius: 50%;
  }
`;

export const ActionsContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
`;

export const Action = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.24);
  box-sizing: border-box;
  border-radius: 5px;
  flex-basis: 46%;
  margin: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`;

export const ActionLabel = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
`;
