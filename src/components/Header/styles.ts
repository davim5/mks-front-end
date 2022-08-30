import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 5rem;

    height: 4rem;
    padding: 30px 88px;
    background-color: ${props => props.theme["primary-color"]};

    button {
        display: flex;
        align-items: center;
        border: none;
        padding: 8px;
        border-radius: 6px;
        cursor: pointer;
        gap: 1rem;
        font-weight: 600;
    }
`;

export const LogoContainer = styled.div`
    user-select: none;

    strong {
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-size: 40px;
        font-weight: 600;
        margin-right: 10px;
    }

    span {
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-size: 20px;
        font-weight: 400;
    }
`