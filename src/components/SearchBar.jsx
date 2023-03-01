import React from "react";
import { useState } from "react";
import "./SearchBar.css";
import logo from "../assets/mobile-transparent--blue.png";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <IconButton className="SearchBar-button">
        <SettingsIcon />
      </IconButton>
      <Link to={"/home"}>
        <img src={logo} alt="DreamSpeak Logo" className="Logo" />
      </Link>
      <IconButton className="SearchBar-button">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchBar;
