import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family:'Noto Sans Display', sans-serif;
        font-size:1.1rem;
        --purple-main:#6251ED;
        --brown-main:#85392b;
        user-select: none;
    }
    h1 {
        letter-spacing: 0.05rem;
        font-family:'Fredoka One', cursive;
    }
    span,a {
        letter-spacing: 0.05rem;
        font-size : 0.8rem;
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
    justify-content: flex-start;
    min-height: 100vh;
    position: relative;
    padding-top: 200px;
    background: url("./background.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
`;
