import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family:'Noto Sans Display', sans-serif;
        font-size:1.1rem;
        --purple-main:#6251ED;
        user-select: none;
    }
    h1 {
        font-weight:400;
        letter-spacing: 0.05rem;
        font-family:'Fredoka One', cursive;
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
