import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: #312e38;
        color: #fff;
    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }
`;
