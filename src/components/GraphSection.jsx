import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import CircularTick from "./CircularTick";
import "./GraphSection.css";

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

      <div className="switch">
        <label className="switch-label">
          <input
            type="checkbox"
            onChange={() =>
              handleDisplayChange(
                display === "sentiment" ? "clarity" : "sentiment"
              )
            }
            checked={display === "sentiment"}
          />
          <span className="slider round"></span>
          <label className="switch-text--before">Clarity</label>
          <span className="switch-text--after">Sentiment</span>
        </label>
      </div>
    </div>
  );
};

export default GraphSection;
