import styled from "styled-components";

export const MoviesListStyled = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-between;
    max-width: 80%;
    margin-top: 10px;
`;

export const MovieStyled = styled.div`
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border: dashed 1px grey
`;

export const TitleStyled = styled.div`
    font-weight: bold;
    text-align: center;
`;

export const NoMoviesFoundStyled = styled.div`
    text-align: center;
    margin-top: 10px;
`;