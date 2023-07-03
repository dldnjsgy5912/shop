import { styled } from "styled-components";

export const StyledCosmeticsLayout = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const StyledCosmeticsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin: 10px;
    padding: 20px;
    cursor: pointer;
    span {
        margin-bottom: 20px;
        ${({ theme }) => theme.Font.body.depth2}
    }
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const StyledAddCartBtn = styled.button`
    padding: 10px;

    color: #ffffff;
    background-color: #000000;
`;
