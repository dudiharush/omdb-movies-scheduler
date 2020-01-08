import axios from "axios";
import { OMDB_KEY } from "./keys";
import { getFetchTx } from 'fetch-tx';
import { Movie, SearchResults } from "../types";

//@ts-ignore
if(OMDB_KEY === 'ENTER KEY HERE'){
    alert('please provide a OMDB_KEY first!')
}

export const omdbClient = axios.create({
    baseURL: "http://www.omdbapi.com/",
    params: {
      apikey: OMDB_KEY
    }
});

const fetchTx = getFetchTx(); 

export const getMovies = (title: string) => {
    return fetchTx<SearchResults>(`http://www.omdbapi.com/?apikey=${OMDB_KEY}&s=${title}&page=1`)
  }

export const getMovieById = (id: string) => {
  return fetchTx<Movie>(`http://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${id}`)
}

export const abortSearch = fetchTx.abort;