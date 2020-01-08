import { debounce } from "lodash";
import React, { useState } from "react";
import { MoviesList } from "../components/MoviesList/MoviesList";
import { TimeSelection } from "../components/TimeSelection/TimeSelection";
import { getVideoDataByTitle } from "../networkApis/youtubeApi";
import { SearchField } from "../components/SearchField";
import { YoutubeModal } from "../components/YoutubeModal/YoutubeModal";
import { useMoviesSearch } from "./useMoviesSearch";

const MIN_SEARCH_LENGTH = 3;

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const {
    getMoviesByTitle,
    movies,
    setMovies,
    isLoading,
    error,
    abortSearch
  } = useMoviesSearch();
  const [openingTime, setOpeningTime] = useState("08:00");
  const [closingTime, setClosingTime] = useState("23:30");
  const [selectedVideo, setSelectedVideo] = React.useState();

  const searchMovie = async (title: string) => {
    if (title.length >= MIN_SEARCH_LENGTH) {

      await getMoviesByTitle(title);
    } else {
      abortSearch();
      setMovies([]);
    }
  };

  const onInputChange = (title: string) => {
    setInputValue(title);
    searchMovieDebounced(title);
  }

  const searchMovieDebounced = React.useCallback(debounce(searchMovie, 300),[]);

  const handleVideoClicked = async (title: string) => {
    const video = await getVideoDataByTitle(title);
    setSelectedVideo(video);
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <SearchField onSearchChange={onInputChange} value={inputValue}/>
      </div>
      <TimeSelection
        closingTime={closingTime}
        openingTime={openingTime}
        onOpeningTimeSelected={setOpeningTime}
        onClosingTimeSelected={setClosingTime}
      />
      {isLoading ? (
        <div style={{ textAlign: "center" }}>Loading...</div>
      ) : error ? (
        <div
          style={{ textAlign: "center", color: "red" }}
        >{`error: ${error}`}</div>
      ) : (
        <MoviesList
          movies={movies}
          openingTime={openingTime}
          closingTime={closingTime}
          hasSearchValue={inputValue.length >= MIN_SEARCH_LENGTH}
          onVideoClicked={handleVideoClicked}
        />
      )}

      <YoutubeModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(undefined)}
      />
    </div>
  );
};

export default App;
