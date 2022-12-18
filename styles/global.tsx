import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Martian Mono', monospace;
        font-size:1rem;
        --brown-main:#EE9E69;
        user-select: none;
    }
    h1{
        font-size:1.1rem;
    }
`;

export const Main = styled.div`
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    overflow-x: hidden;
`;
export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    background-color: #f2eae4;
`;
