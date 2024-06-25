import axios from "axios";
//import { GIFResponse } from "../interfaces/gif.response";

const apiKey = "2UEuOIChe0zhPMMjLRh6CCBqpFvAlYJu";

export const giphyApi = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  params: {
    api_key: apiKey,
  },
});

// giphyApi
//   .get<GIFResponse>("/random")
//   .then((resp) => console.log(resp.data.data.images.downsized_large.url))
//   .catch((error) => console.info(error));
