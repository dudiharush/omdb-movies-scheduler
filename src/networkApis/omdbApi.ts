import axios from "axios";
import { OMDB_KEY } from "./keys";

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