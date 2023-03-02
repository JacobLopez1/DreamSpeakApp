import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MoodIcon from "@mui/icons-material/Mood";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import "./Search.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Search = () => {
  const [sentimentRange, setSentimentRange] = React.useState([0, 10]);
  const [clarityRange, setClarityRange] = React.useState([0, 10]);

  const navigate = useNavigate();

  return (
    <div className="search">
      <div className="search-bar">
        <ArrowBackIcon onClick={() => navigate(-1)} />
        <input type="text" placeholder="Search your entries" />
      </div>

      <div className="search-filters">
        <div className="search-filter">
          <div className="search-filter--start">
            <StarIcon className="search-starIcon" />
            <span className="search-filter--text">Favorites</span>
          </div>
        </div>
        <div className="search-filter">
          <div className="search-filter--start">
            <LocalOfferIcon />
            <span className="search-filter--text">Tags</span>
          </div>
        </div>
        <div className="search-filter">
          <div className="search-filter--start">
            <MoodIcon />
            <span className="search-filter--text">Sentiment</span>
          </div>
          <Box sx={{ width: 150 }} className="search-sliderBox">
            <Slider
              value={sentimentRange}
              onChange={(event, newValue) => {
                setSentimentRange(newValue);
              }}
              valueLabelDisplay="auto"
              aria-label="Sentiment Range"
              getAriaValueText={(value) => `${value}`}
              min={0}
              max={10}
            />
          </Box>
        </div>
        <div className="search-filter">
          <div className="search-filter--start">
            <CloudOutlinedIcon />
            <span className="search-filter--text">Clarity</span>
          </div>
          <Box sx={{ width: 150 }} className="search-sliderBox">

            <Slider
              value={clarityRange}
              onChange={(event, newValue) => {
                setClarityRange(newValue);
              }}
              valueLabelDisplay="auto"
              aria-label="Clarity Range"
              getAriaValueText={(value) => `${value}`}
              min={0}
              max={10}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Search;
