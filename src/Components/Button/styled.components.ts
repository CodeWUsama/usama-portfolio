import styled from "styled-components";

interface StyledButtonProps {
  $height?: number;
  $width?: number;
  $backgroundColor?: string;
  $color?: string;
  $fontSize?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "white"};
  color: ${(props) =>
    props.$color? props.$color: "#25B0D2"};
  font-size: ${(props) =>
    props.$fontSize ? props.$fontSize : "30px"} ;
    border-radius: 45px;
    cursor: pointer;
    border:none;
    padding:5px 15px;
    font-family: "Roboto",sans-serif;
`;
