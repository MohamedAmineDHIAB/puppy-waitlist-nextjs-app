import styled from "styled-components";
import Image from "next/image";
import { keyframes } from "styled-components";

const motionAnimation = keyframes`
 0% { top: calc((100vh - 5vw) / 2); left: calc((100vw - 5vw) / 2); transform: rotate(0deg) scale(1);  }
 25% { top: calc((100vh - 5vw) / 2); left: calc((100vw - 5vw) / 2); transform: rotate(360deg) scale(2);  }
 50% { top: calc((100vh - 5vw) / 2); left: calc((100vw - 5vw) / 2); transform: rotate(360deg) scale(2);  }
 75% { top: calc((100vh - 5vw) / 2); left: calc((100vw - 5vw) / 2); transform: rotate(0deg) scale(1); }
 100% { top: 0; left: 2.5vw; }
`;
const Wrapper = styled.div`
    width: 5vw;
    height: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    position: fixed;
    z-index: 999;
    top: calc((100vh - 5vw) / 2);
    left: calc((100vw - 5vw) / 2);
    animation-name: ${motionAnimation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
`;

const Logo = () => {
    return (
        <Wrapper>
            <Image src="/logo.png" fill={true} alt="Puppy SPA logo" />
        </Wrapper>
    );
};

export default Logo;
