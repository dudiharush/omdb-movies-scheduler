import axios from "axios";
import { YT_KEY } from "./keys";
const YOUTUBE_API_KEY = YT_KEY;

//@ts-ignore
if(YOUTUBE_API_KEY ===  "ENTER KEY HERE"){
  alert("please provide a YOUTUBE_API_KEY first!")
}

const youtubeApi = axios.create({
  baseURL: "https://content.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 1,
    key: YOUTUBE_API_KEY
  }
});

export const getVideoDataByTitle = async (title: string) => {
    const {
      data: { items }
    } = await youtubeApi.get("/search", {
      params: {
        q: title + ' trailer'
      }
    });
    return items && items[0];
}