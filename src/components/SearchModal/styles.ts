import styled from 'styled-components';


export const Container = styled.div`

  h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #ecf0f1;
  }

  input {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    color: var(--blue-light);
    padding: 1rem;
  }

  button {
    width: 100%;
    display: block;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.8rem;
    border: 0;
    border-radius: 0.25rem;
    background: var(--cinza-light);
    color: var(--blue-light);
    transition: filter 0.2s;
    margin-top: 1rem;

    &:hover {
      filter: brightness(0.9)
    }
  }

  .text-alert {
      color: #fdcb6e;
      padding: 0.5rem;
      font-weight: 600;
    }

`