import styled, { css } from "styled-components";

export const Container = styled.button`
  all: unset;
  padding: 0.5rem 0.75rem;
  border: 2px solid ${({ theme }) => theme.COLORS.g12};
  border-radius: 0.25rem;
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.COLORS.g12};
    font-size: ${theme.SIZE.MD};
    font-weight: 500;
    font-family: "Poppins", sans-serif;

    transition: all 0.3s;

    &:hover {
      border-color: ${theme.COLORS.b10};
      color: ${theme.COLORS.b10};
    }
  `}
`;
