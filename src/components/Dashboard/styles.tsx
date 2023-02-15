import styled from "styled-components";

export const Container = styled.section`
  max-width: 1120px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: -5rem;
  
  div {
    border-radius: 0.5rem;
    background:#34495e;
    padding: 0.8rem;

    h2 {
        color: var(--background);
        margin-bottom: 1rem;
    }

    p {
        color: var(--cinza-light);
        margin-bottom: 1rem;
    }

    a {
        text-decoration: none;
        color:#48dbfb;
    }
  }
`;
