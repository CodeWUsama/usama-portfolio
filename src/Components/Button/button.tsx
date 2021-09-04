import * as React from "react";
import { StyledButton } from "./styled.components";

export interface ButtonProps {
  text: string;
  marginTop?: number;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, marginTop,onClick }) => {
  return (
    <StyledButton onClick={onClick} style={{ marginTop: marginTop ? marginTop : 0 }}>
      {text}
    </StyledButton>
  );
};

export default Button;
