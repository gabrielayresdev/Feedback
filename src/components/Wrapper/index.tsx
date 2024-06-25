import React from "react";
import { Container } from "./styles";

const Wrapper = ({ children }: React.PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
