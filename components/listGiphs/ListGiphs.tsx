import GiphCard from "../GiphCard/GiphCard"
import { Fragment} from "react";

const ListGiphs = ({
    data
}: any) => {
    return (
            <div >
                {data && data.map((item: any, index: any) => {
                    return (
                        <Fragment key={index}>
                            <GiphCard src={item.images.original.url} />
                        </Fragment>
                    )
                })}
            </div>
    )
}


export default ListGiphs