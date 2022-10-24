import Image from "next/image"
import {
    IconButton,
} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
interface GiphCardProps{
    src: string
}
const GiphCard: React.FC<GiphCardProps> = ({ src }): JSX.Element => {
    return (
        <div>
            <img src={src} />
            <IconButton color="primary" sx={{backgroundColor: "red"}}>
                <FavoriteBorderIcon />
            </IconButton>
        </div>

    )
}

export default GiphCard