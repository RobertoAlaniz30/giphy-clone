import {
    Button
} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styles from "./GiphCard.module.scss"
import { parsedGiphObject } from "../../interfaces/interfaces"
interface GiphCardProps {
    src: string,
    onClick?: () => void,
    item?: parsedGiphObject
}
const GiphCard: React.FC<GiphCardProps> = ({ src, onClick, item }): JSX.Element => {

    return (
        <div className={styles.giphCard_container} >
            <img src={src} />
            <Button variant="contained"
                onClick={onClick}
                color={`${item?.selected ? "error" : "inherit"}`}
                className={styles.favorite_button}
                startIcon={<FavoriteBorderIcon />}
            ></Button>
        </div>

    )
}

export default GiphCard