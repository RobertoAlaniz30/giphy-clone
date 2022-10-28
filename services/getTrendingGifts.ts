import axios from 'axios'
const getTrendingGifts = async (offset?: number) => {
  const data = await axios({
    method: "GET",
    url: "https://api.giphy.com/v1/gifs/trending",
    params: {
      api_key: "HC5YScnd2Kws9G5xAgZFUAC0XGj16Xse",
      offset: offset || 0
    },
  });
 
  return data;
};
export { getTrendingGifts };