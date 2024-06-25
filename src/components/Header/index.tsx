import React from "react";
import Wrapper from "../Wrapper";
import { Container, Content, Logo, Nav, NavItem } from "./styles";

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
          </Nav>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Header;
