import { parseDataGiphs } from "../utils/parseDataGiphs";
import { StoreContext } from "../store/StoreProvider";
import { useContext } from "react";
import { getTrendingGifts } from "../services/getTrendingGifts";
function useInfiniteFetchGiphs() {
    const { dispatch, store } = useContext(StoreContext)
    const getMoreGiphs = async () => {
        const axiosResponse = await getTrendingGifts(store.giphs.length)
        const parsedGiphs = parseDataGiphs(axiosResponse.data.data)
        dispatch({
            type: "FETCH_INFINITE_GIPHS",
            payload: parsedGiphs
        })
    };
    return {
        getMoreGiphs
    }
}


export { useInfiniteFetchGiphs }