import GiphCard from "../GiphCard/GiphCard"
import { Fragment } from "react";
import styles from "./ListGiphs.module.scss"
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import axios from "axios";

const ListGiphs = ({
    data
}: any) => {
    const [giphs, setGiphs] = useState(data)
    const getMoreGiphs = () => {
        axios({
            method: "GET",
            url: "https://api.giphy.com/v1/gifs/trending",
            params: {
                api_key: "HC5YScnd2Kws9G5xAgZFUAC0XGj16Xse",
                offset: 50
            },
        });
        setGiphs([...giphs, ...data])
    };
    return (
        <Fragment>
            <button onClick={() => console.log(giphs)}>ujedfs</button>
            <InfiniteScroll
                dataLength={giphs.length}
                next={getMoreGiphs}
                hasMore={true}
                loader={<h3> Loading...</h3>}
                endMessage={<h4>Nothing more to show</h4>}
            >
                <div className={styles.grid_container}>
                    {giphs && giphs.map((item: any, index: any) => {
                        return (
                            <Fragment key={index} >
                                <GiphCard src={item.images.original.url} />
                            </Fragment>
                        )
                    })}
                </div>
            </InfiniteScroll >
        </Fragment >
    )
}


export default ListGiphs