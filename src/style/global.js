import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: ${props => props.backColor};
        color: ${props => (props.color ? "#353535" : "#f7f7f7")};
        font-family: sans-serif;
        font-size: 13px;
    }
`;

export default GlobalStyle;
