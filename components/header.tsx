import styled from "styled-components";

const HeaderWrapper = styled.div`
    height: 5vw;
    width: 100vw;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
    z-index: 998;
`;
export const NavBar = styled.div`
    display: flex;
    height: 100%;
    width: 90%;
    justify-content: flex-end;
    align-items: center;
`;

export const NavBarItem = styled.div`
    display: flex;
    height: 1.1rem;
    align-items: center;
    position: relative;
    cursor: pointer;
    &:after {
        width: 0;
        background: black;
        height: 2px;
        content: "";
        position: absolute;
        bottom: -5px;
        transition: all 0.2s ease-in-out;
    }
    &:hover {
        &:after {
            width: 100%;
            background: var(--purple-main);
            height: 2px;
            content: "";
            position: absolute;
        }
        color: var(--purple-main);
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
    transition: all 0.2s ease-in-out;
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <NavBar>
                <NavBarItem>
                    <h1>Waitlist</h1>
                </NavBarItem>
            </NavBar>
        </HeaderWrapper>
    );
};

export default Header;
