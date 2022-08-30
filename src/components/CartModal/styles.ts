import styled from "styled-components";

export const ProductContainer = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    color: ${props => props.theme["base-text"]};
    background-color: #FFF;
    border-radius: 8px;
    height: 95px;

    width: 100%;
    padding: 20px;

    strong {
        font-size: 16px;
        font-weight: 400;
    }

    img {
        height: 50px;
        width: auto;
    }

    input {
        
    }

    span {
        color: #000;
        font-size: 14px;
        font-weight: 700;
    }
`

export const AmountButtons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #BFBFBF;
    width: 40px;
    height: 20px;

    .control-button {
        height: max-content;
        
        width: auto;
        color: #000;
        background-color: #fff;
    }

    span {

    }
`;