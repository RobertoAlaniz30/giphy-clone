import GiphCard from "../GiphCard/GiphCard"
import { Fragment} from "react";
import styles from "./ListGiphs.module.scss"
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { parsedGiphObject } from "../../interfaces/interfaces";
import { useInfiniteFetchGiphs } from "../../hooks/useInfiniteFetchGiphs";
import { useSnackbar } from 'notistack';

const ListGiphs = () => {
    const { enqueueSnackbar} = useSnackbar();
    const {getMoreGiphs} = useInfiniteFetchGiphs();
    const {toogleItemOfLocalStorage} = useLocalStorage("FAVORITES_GIPHS", [])
    const { store} = useContext(StoreContext)

    const handleOnClick = (item: parsedGiphObject) => { 
        toogleItemOfLocalStorage(item)
        enqueueSnackbar('Toogle Item');
    }
    if(store.isLoading){
        return <p>Loading</p>
    }
    return (
        <div className={styles.listGiph_container}>
            <InfiniteScroll
                dataLength={store.searchedGiphs?.length}
                next={getMoreGiphs}
                hasMore={true}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
            >
                <div className={styles.grid_container}>
                    {store.searchedGiphs && store.searchedGiphs.map((item: parsedGiphObject, index: number) => {
                        return (
                            <Fragment key={index} >
                                <GiphCard src={item.url} onClick={() => handleOnClick(item)} item={item} />
                            </Fragment>
                        )
                    })}
                </div>
            </InfiniteScroll >
        </div>
    )
}


export default ListGiphs