import { GIFResponse } from "../interfaces/gif.response";

const apiKey = "2UEuOIChe0zhPMMjLRh6CCBqpFvAlYJu";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  // .then(resp => console.log(resp))
  .then((resp) => {
    return resp.json();
  })
  .then((body: GIFResponse) => {
    console.log(body.data.images.downsized_large.url);
  })
  .catch((error) => console.info(error));
