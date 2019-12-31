import axios, { AxiosPromise } from "axios";
import { useState } from "react";
import { Movie, SearchResults } from "../types";
import { omdbClient } from "../networkApis/omdbApi";

const MAX_RESULTS = 5;

export const useMoviesSearch = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getMoviesByTitle = async (title: string) => {
    try {
      setIsLoading(true);
      
      const { data } = await omdbClient.get<SearchResults>("", {
        params: {
          s: title,
          page: 1
        }
      });
      let promises: AxiosPromise<Movie>[] = [];
      for (let i = 0; i < Math.min(+data.totalResults, MAX_RESULTS); i++) {
        let promise = omdbClient.get<Movie>("", {
          params: {
            i: data.Search[i].imdbID
          }
        });
        promises.push(promise);
      }

      const moviesRes = await axios.all(promises);
      setIsLoading(false);
      setMovies(moviesRes.map(movieRes => movieRes.data));
    } catch (err) {
        setIsLoading(false);
        setError(err.message);
    }
  };
  return { getMoviesByTitle, movies, setMovies, isLoading, error };
};
