import axios from 'axios'
const getSearchedGifts = async (query: string) => {
  const data = await axios({
    method: "GET",
    url: "https://api.giphy.com/v1/gifs/search",
    params: {
      api_key: "HC5YScnd2Kws9G5xAgZFUAC0XGj16Xse",
      q: query
    },
  });
  return data;
};
export { getSearchedGifts };