export interface TimeUnits {
    h: number;
    m:number
}


export interface SearchResults {
    "Search": MovieBase[];
    "totalResults":string;
    "Response":Boolean;
}

export interface MovieBase {
    "Title": string;
    "Year": string;
    "imdbID": string;
    "Type": string;
    "Poster": string;
}

export interface Movie extends MovieBase{
    "Rated": string;
    "Released": string;
    "Runtime": string;
    "Genre": string;
    "Director": string;
    "Writer": string;
    "Actors": string;
    "Plot": string;
    "Language": string;
    "Country": string;
    "Awards": string;
    "Ratings": {
        "Source": string;
        "Value": string;
    }[];
    "Metascore": string;
    "imdbRating": string;
    "imdbVotes": string;
    "DVD": string;
    "BoxOffice": string;
    "Production": string;
    "Website": string;
    "Response": string;
    "Error": string;
}