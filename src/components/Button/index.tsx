import React from "react";
import { Container } from "./styles";

type Props = {
  handleClick: () => void;
} & React.PropsWithChildren;

const Button = ({ children, handleClick }: Props) => {
  return <Container onClick={handleClick}>{children}</Container>;
};

export default Button;
