import React from "react";
import YouTube, { Options } from "react-youtube";

interface VideoPlayerProps {
  video: any;
}

const opts: Options = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
    origin: window.location.origin,
    enablejsapi: 1
  }
};

export const VideoPlayer = ({ video }: VideoPlayerProps) => {
  return video ? <YouTube videoId={video.id.videoId} opts={opts} /> : <div>No video selected</div>
};
