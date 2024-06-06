import { styled } from "styled-components";

export const Container = styled.main`
  background-color: #f1f0f5;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin: 20px;
  height: auto;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(270px, 1fr));
    transition: all 0.5s;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(320px, 1fr));
    transition: all 0.5s;
  }
  @media (min-width: 1536px) {
    grid-template-columns: repeat(4, minmax(300px, 1fr));
    transition: all 0.5s;
  }
`;

// sm: '640px',
// md: '768px',
// lg: '1024px',
// xl: '1280px',
// '2xl': '1536px'
