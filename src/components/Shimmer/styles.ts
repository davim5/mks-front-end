import styled from "styled-components";

export const SkeletonContainer = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(230px, 4fr));
    grid-template-rows: repeat(2,1fr);
    gap: 30px;
    
`;