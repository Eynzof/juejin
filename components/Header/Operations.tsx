import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  alpha,
  Avatar,
  Button,
  IconButton,
  InputBase,
  styled,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { switchTheme } from "../../src/store/themeSlice";
import { useDispatch } from "react-redux";

import styles from "./Operations.module.css";
import { width } from "@mui/system";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid",
  borderColor: "#c2c8d1",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Operations() {
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(switchTheme(""));
  };

  return (
    <div className={styles.operations__container}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="搜索..."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Button variant="contained" sx={{ margin: "0 20px" }} disableElevation>
        创作者中心
      </Button>

      <IconButton
        onClick={toggleTheme}
        color="primary"
        aria-label="toggle theme"
      >
        <Brightness4Icon />
      </IconButton>

      <IconButton color="primary" aria-label="notifications">
        <NotificationsIcon />
      </IconButton>

      <Avatar
        alt="Remy Sharp"
        src="./avatar.jpg"
        sx={{ width: 36, height: 36, marginLeft: "10px" }}
      />
    </div>
  );
}

export default Operations;
