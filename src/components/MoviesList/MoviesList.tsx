import React from "react";
import { Movie } from "../../types";
import { MoviesListStyled, TitleStyled, NoMoviesFoundStyled, MovieStyled } from "./MoviesList.styled";
import { ScreeningTimes } from "../ScreeningTimes/ScreeningTimes";

export interface MoviesListProps {
  movies: Movie[];
  hasSearchValue: boolean;
  openingTime: string;
  closingTime: string;
  onVideoClicked: (title: string) => void;
}

export const MoviesList = ({
  movies,
  openingTime,
  closingTime,
  onVideoClicked,
  hasSearchValue
}: MoviesListProps) => {
  return (
    hasSearchValue && movies.length === 0 ?
      <NoMoviesFoundStyled>no movies found</NoMoviesFoundStyled>
    :
    <MoviesListStyled>
      {
      movies.map(movie => (
        <MovieStyled
          onClick={() => onVideoClicked(movie.Title)}
          key={movie.imdbID}
        >
          <TitleStyled>{movie.Title}</TitleStyled>
          <div>{movie.Runtime}</div>
          <img src={movie.Poster} height={100} alt="poster" />
          <ScreeningTimes
            duration={+movie.Runtime.split(" ")[0]}
            openingTime={openingTime}
            closingTime={closingTime}
          />
        </MovieStyled>
      ))}
    </MoviesListStyled>
  );
};
