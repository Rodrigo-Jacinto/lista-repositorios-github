import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
    --blue: #0984e3;
    --blue-light: #74b9ff;
    --cinza-light: #dcdde1;
    --background: #f0f2f5;
    --text-title: #7f8fa6;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;

}

button {
    cursor: pointer;
}

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 527px;
    background: #00a8ff;
    position: relative;
    border-radius: 0.25rem;
    padding: 1.2rem;
  }

`;
