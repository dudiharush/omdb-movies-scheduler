import axios from "axios";
import { useState } from "react";
import { Movie } from "../types";
import { getMovieById, getMovies, abortSearch } from "../networkApis/omdbApi";

const MAX_RESULTS = 5;

export const useMoviesSearch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getMoviesByTitle = async (title: string) => {
    try {
      abortSearch();
      setIsLoading(true);
      const data = await getMovies(title);
      let promises: Promise<Movie>[] = [];
      for (let i = 0; i < Math.min(data && +data.totalResults, MAX_RESULTS); i++) {
        let promise = getMovieById(data.Search[i].imdbID);
        promises.push(promise);
      }

      const moviesRes = await axios.all(promises);
      setIsLoading(false);
      setMovies(moviesRes);
    } catch (err) {
      if(err.name === 'AbortError') {
        console.error("aborted")
      }else{
        setIsLoading(false);
        setError(err);
      }
    }
  };
  return { getMoviesByTitle, movies, setMovies, isLoading, error, abortSearch };
};
