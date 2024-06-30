import React from "react";
import Wrapper from "../Wrapper";
import { Container, Content, Logo, Nav, NavItem } from "./styles";
import Button from "../Button";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Logo>Gabriel Ayres</Logo>
          <Nav>
            <NavItem>Sobre mim</NavItem>
            <NavItem>Experiência</NavItem>
            <NavItem>Projetos</NavItem>
            <NavItem>Formação</NavItem>
            <Button handleClick={() => {}}>Contato</Button>
          </Nav>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Header;
