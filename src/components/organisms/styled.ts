import styled from "styled-components";
export const StyledHeader = styled.div`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    box-sizing: border-box;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    padding: 0 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;

    z-index: 100;
    background-color: ${({ theme }) => theme.Color.white};
    img {
        width: 7rem;
        height: 5rem;
        border-radius: 50%;
    }
    h1 {
        ${({ theme }) => theme.Font.subTitle.depth2}
    }
    span {
        ${({ theme }) => theme.Font.body.depth2}
    }
`;
export const StyledTopArea = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem 0;

    .icon-Arrow-Back {
        width: 2.5rem;
        height: 2.5rem;
        background: url(/icons/Arrow-Back.svg);
        margin-right: 2rem;
        cursor: pointer;
    }
    h1 {
        flex: 1;
    }
    button {
        /* position: absolute;
        right: 0; */
    }
`;

export const StyledButtonArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 0;
`;
