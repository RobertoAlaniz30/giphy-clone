import axios from 'axios'
const getTrendingGifts = async () => {
  const data = await axios({
    method: "GET",
    url: "https://api.giphy.com/v1/gifs/trending",
    params: {
      api_key: "HC5YScnd2Kws9G5xAgZFUAC0XGj16Xse",
    },
  });
  // console.log(data.data
  return data;
  //   axios({
  //     method: "GET",
  //     url: "https://api.giphy.com/v1/gifs/trending",
  //   }).then((e: AxiosResponse) => console.log("hola"));
};
export { getTrendingGifts };