import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 10rem;
    ${({ theme }) => theme.media.desktop`
        
    `}
`;
