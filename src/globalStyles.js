import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

html,
body {
    min-height: 100%;
    background-color: ${({ theme }) => theme.dark};
}
`;

export default GlobalStyle;
