import styled from "styled-components";

export const Container = styled.div`
  max-width: 72.5rem;
  width: calc(100% - 8rem);
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: calc(100% - 4rem);
  }
  @media (max-width: 768px) {
    width: calc(100% - 1rem);
  }
`;
