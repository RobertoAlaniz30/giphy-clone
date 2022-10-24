import { Fragment, useRef } from "react";
import styles from "./SearchBar.module.scss"
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";

import { Close, Search } from "@mui/icons-material";

interface SearchBarProps {
  value?: string;
  onSearch?: () => void;
  onChange: (e: any) => void;
  onResetSearch?: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onSearch,
  onChange,
  onResetSearch,
}): JSX.Element => {
  const inputRef = useRef();

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      onChange(e);
    }

  //   function handleOnReset() 
  //     inputRef.current.focus();
  //     onResetSearch();
  //   }
  return (
    <Fragment>
      <Box display="flex" className={styles.textField}>
        <TextField
          sx={{ backgroundColor: "white", width: "800px", }}
          inputRef={inputRef}
          size="small"
          fullWidth
          placeholder="Buscar"
          variant="outlined"
          value={value}
          //   onKeyUp={(e) => {
          //     if (e.code === "Enter") onSearch();
          //   }}
          onChange={handleOnChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title={<Typography>Borrar Búsqueda</Typography>}>
                  <IconButton
                    // onClick={handleOnReset}
                    // onMouseDown={handleOnReset}
                    size="small"
                  >
                    <Close />
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />

        <Button
          size="small"
          style={{ marginLeft: "10px", padding: "0px 20px", borderRadius: "16px", backgroundColor: "black" }}
          onClick={onSearch}
          disableElevation
          variant="contained"
          startIcon={<Search />}
        >
          Buscar
        </Button>
      </Box>
    </Fragment>
  );
};

export default SearchBar;