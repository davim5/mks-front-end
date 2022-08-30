import styled from "styled-components";

export const HomeContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10rem;
`;

export const ProductList = styled.section`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(230px, 4fr));
    grid-template-rows: repeat(2,1fr);
    gap: 30px;
`;

export const ProductItem:any = styled.div`
    display: flex;
    max-width: 217px;
    
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${props=>props.theme.white};

    border-radius: 8px;
    padding: 0px 0.875rem;

    box-shadow: 0 2px 8px #00000022;

    img {
       width: 100%;
       min-height: 189px;
    }

    div {
        display: flex;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        span {
            color: white;
            background-color: ${props => props.theme["price-tag"]};

            border-radius: 5px;
            font-weight: 700;
            font-size: 15px;
            padding: .4rem;
        }
    }

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 400;

        line-height: 19px;
        width: 120px;
        color: ${props=>props.theme["base-text"]};
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-size: 10px;
        color: ${props=>props.theme["base-text"]};
        text-align: center;
        max-height: 25px;

        
       
        // Quebra da linha
        display: block;
        text-overflow: ellipsis;
        word-wrap: break-word;
        overflow: scroll;

        // Scroll
        padding-left: 6px;
        overflow-x: hidden; /* Hide horizontal scrollbar */
        max-height: 25px;
        line-height: 1;

        &::-webkit-scrollbar {
            width: 2px;
            height: 5px;
        }

        &::-webkit-scrollbar-track {
            background: #f1f1f1;;
        }

        &::-webkit-scrollbar-thumb {
            background: #ccc;
        }
    }

    button {
        cursor: pointer;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;

        background: ${props => props.theme["primary-color"]};
        color: white;

        font-size: 14px;
        font-weight: 600;

        padding: 7px 20px;

        border: none;
        border-radius: 0 0 8px 8px;
        width: 217px;
        height: 32px;
    }
`;