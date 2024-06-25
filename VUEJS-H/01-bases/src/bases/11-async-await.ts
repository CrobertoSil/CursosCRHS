import type { GIFResponse } from "../interfaces/gif.response";
import { giphyApi } from "./10-axios";

export const getImage = async () => {
  try {
    const resp = await giphyApi.get<GIFResponse>("/radddndom");
    return resp.data.data.images.downsized_large.url;
  } catch (error) {
    throw 'URL no encontrado'
  }
};

getImage().then((url) => console.log({ url })).catch(error => console.log(error));

  