import React from "react";
import "./SearchBar.css";
import logo from "../assets/mobile-transparent--blue.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import TuneIcon from "@mui/icons-material/Tune";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <Link to={"/settings"}>
        <IconButton className="SearchBar-button">
          <TuneIcon />
        </IconButton>
      </Link>
      <Link to={"/home"}>
        <img src={logo} alt="DreamSpeak Logo" className="Logo" />
      </Link>
      <Link to={"/search"}>
        <IconButton className="SearchBar-button">
          <SearchIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default SearchBar;
