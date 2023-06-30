import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #4a5568;
    }

    html, body, #root {
        height: 100%;
        background-color: rgb(247, 249, 251);
    }

    *, button, input {
        border: 0;
        outline: 0;
        color: #4a5568;
    }

    button {
        cursor: pointer;
    }

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
`;
