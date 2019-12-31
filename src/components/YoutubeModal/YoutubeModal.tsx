import React from "react";
import { VideoPlayer } from "../YoutubePlayer";
import { YoutubeModalStyled } from "./YoutubeModal.styled";

export interface YoutubeModalProps {
  video: any;
  onClose: () => void;
}

export const YoutubeModal = ({ video, onClose }: YoutubeModalProps) => (
  <YoutubeModalStyled
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={video !== undefined}
    onClose={onClose}
  >
    <VideoPlayer video={video} />
  </YoutubeModalStyled>
);


