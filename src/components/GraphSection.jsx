import React, { useState } from "react";
import { LineChart, Line, XAxis, Tooltip, Legend } from "recharts";
import CircularTick from "./CircularTick";
import "./GraphSection.css";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoodIcon from "@mui/icons-material/Mood";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const GraphSection = () => {
  const [data, setData] = useState([
    { name: "Sun", sentiment: 8, clarity: 2 },
    { name: "Mon", sentiment: 5, clarity: 1 },
    { name: "Tue", sentiment: 6, clarity: 9 },
    { name: "Wed", sentiment: 4, clarity: 7 },
    { name: "Thu", sentiment: 2, clarity: 10 },
    { name: "Fri", sentiment: 8, clarity: 5 },
    { name: "Sat", sentiment: 10, clarity: 9 },
  ]);

  const [display, setDisplay] = useState("sentiment");

  const handleDisplayChange = (newDisplay) => {
    setDisplay(newDisplay);
  };

  const chartData = data.slice(-7); // only show last 6 data points
  return (
    <div className="graph-section">
      <div className="graph_buttons">
        <button
          className="graph_button active"
          onClick={() => handleDisplayChange("sentiment")}
        >
          <BarChartIcon />
          Overall
        </button>
        <button
          className="graph_button"
          onClick={() => handleDisplayChange("sentiment")}
        >
          <MoodIcon />
          Sentiment
        </button>
        <button
          className="graph_button"
          onClick={() => handleDisplayChange("sentiment")}
        >
          <CloudOutlinedIcon />
          Clarity
        </button>
      </div>

      <div className="graph_time-selection">
        <button className="graph_time-button--left active">Weekly</button>
        <button className="graph_time-button--right">Monthly</button>
      </div>

      <div className="graph_week-selection">
        <div className="graph_week-of">
          <span className="graph_week-title">Week of Feb 26</span>
          <br />
          <span className="graph_week-dates">FEB 26. - MAR. 4</span>
        </div>
        <div className="graph_week-buttons">
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
        </div>
      </div>
      <div className="linechart">
        <LineChart
          width={360}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="name"
            tick={<CircularTick />}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Line type="monotone" dataKey={display} stroke="#7FA1E8" />
        </LineChart>
        <div className="graph-section-score">
          <span className="graph-section-score-title">8.2</span><span className="graph-section-score-percent"><ArrowUpwardIcon />12.5%</span><br />
          <span className="graph-section-score-message">Your weekly rating</span>
        </div>
      </div>
    </div>
  );
};

export default GraphSection;
