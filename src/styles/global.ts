import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     *, body, html {
        margin: 0;
        padding: 0;
        border: 0;
        list-style: none;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        box-sizing: border-box;
        word-break: break-word;
    }

    @media (max-width: 1024px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 768px) {
        html {
            font-size: 87.5%;
        }
    }

`;