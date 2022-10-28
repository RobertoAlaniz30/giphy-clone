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
  onSearch: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onResetSearch: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onSearch,
  onChange,
  onResetSearch,
}): JSX.Element => {
  const inputRef = useRef<any>();

  function handleOnReset() {
    inputRef.current.focus();
    onResetSearch();
  }
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    onChange(e)
  }
  return (
    <Fragment>
      <Box display="flex" className={styles.searchBar_container}>
        <TextField
          inputRef={inputRef}
          size="small"
          fullWidth
          placeholder="Buscar"
          variant="outlined"
          value={value}
          onKeyUp={(e: React.KeyboardEvent<HTMLDivElement>) => {
            if (e.code === "Enter") onSearch();
          }}
          onChange={handleOnChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title={<Typography>Borrar Búsqueda</Typography>}>
                  <IconButton
                    onClick={handleOnReset}
                    onMouseDown={handleOnReset}
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
          className={styles.search_button}
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