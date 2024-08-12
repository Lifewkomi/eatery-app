import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/syncopate";
import "@fontsource/luckiest-guy";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  /* Chrome, Safari, Edge */
    ::-webkit-scrollbar {
    width: 12px;
    }

    ::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 6px;
    border: 2px solid #f1f1f1;
    }

    ::-webkit-scrollbar-track {
    background-color: #e1e1e1;
    }

    body {
    scrollbar-width: thin;
    scrollbar-color: #000 #f1f1f1;
    }

    h1, h2, h3, h4, h5, h6 {

    }

    p {

    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }

    button {
    }
`;

export default GlobalStyles;
