import React, { useState } from "react";
import AddToJournalButton from "../components/AddToJournalButton";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import "./Profile.css";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ProfilePic from "../assets/favicons/white-trans.png";
import { Line, LineChart } from "recharts";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ChatIcon from '@mui/icons-material/Chat';

const Profile = (active) => {
  const [data, setData] = useState([
    { name: "Sun", sentiment: 8, clarity: 2 },
    { name: "Mon", sentiment: 5, clarity: 1 },
    { name: "Tue", sentiment: 6, clarity: 9 },
    { name: "Wed", sentiment: 4, clarity: 7 },
    { name: "Thu", sentiment: 2, clarity: 10 },
    { name: "Fri", sentiment: 8, clarity: 5 },
    { name: "Sat", sentiment: 10, clarity: 9 },
  ]);

  const chartData = data.slice(-7); // only show last 7 data points
  return (
    <div className="profile">
      <div
        className="upper"
        style={{
          height: "85px",
          zIndex: "999",
          top: "0",
        }}
      >
        <SearchBar />
      </div>

      <div className="profile-info">
        <div className="profile-pic--wrapper">
          <img src={ProfilePic} alt="profile pic" className="profile-pic" />
        </div>
        <div className="profile-text">
          <div className="profile-name">Jacob Lopez</div>
          <div className="profile-substatus">Dreamer</div>
        </div>
      </div>

      <div className="badges">
        <div className="badge">
          <NoteAltOutlinedIcon />
          <span className="badge-num">10</span>
          <span className="badge-title">entries</span>
        </div>
        <div className="badge">
          <LocalFireDepartmentOutlinedIcon />
          <span className="badge-num">10</span>
          <span className="badge-title">streak</span>
        </div>
        <div className="badge">
          <ImageOutlinedIcon />
          <span className="badge-num">10</span>
          <span className="badge-title">sketches</span>
        </div>
      </div>

      <div className="linechart-wrapper">
        <LineChart
          width={300}
          height={160}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Line type="monotone" dataKey={"sentiment"} stroke="#7FA1E8" />
        </LineChart>
        <div className="graph-section-score">
          <span className="graph-section-score-title">8.2</span>
          <span className="graph-section-score-percent">
            <ArrowUpwardIcon />
            12.5%
          </span>
          <br />
          <span className="graph-section-score-message">
            Your weekly rating
          </span>
        </div>
      </div>

      <div className="subchart-cards">
        <div className="subchart-card--dark"><StarOutlineIcon /> Rate Dreamspeak 5-stars</div>
        <div className="subchart-card--light"><ChatIcon />Contact Support</div>
      </div>

      <Navigation selected={active} />
      <AddToJournalButton />
    </div>
  );
};

export default Profile;
