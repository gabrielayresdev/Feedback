import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 1.25rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const Logo = styled.h1`
  font-family: "Fira Sans", sans-serif;
  color: ${({ theme }) => theme.COLORS.g12};
  font-size: 1.5rem;
  font-weight: 700;

  &::before {
    content: "<";
    color: ${({ theme }) => theme.COLORS.b10};
    position: relative;
    top: 1px;
  }

  &::after {
    content: " />";
    color: ${({ theme }) => theme.COLORS.b10};
    position: relative;
    top: 2px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const NavItem = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.g12};
  text-decoration: none;

  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.COLORS.b10};
  }
`;
