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
import "./GraphSection.css";

const GraphSection = () => {
  const [data, setData] = useState([
    { name: "Jan", sentiment: 10, salience: 20 },
    { name: "Feb", sentiment: 15, salience: 10 },
    { name: "Mar", sentiment: 12, salience: 22 },
    { name: "Apr", sentiment: 8, salience: 17 },
    { name: "May", sentiment: 5, salience: 30 },
    { name: "Jun", sentiment: 10, salience: 15 },
    { name: "Jul", sentiment: 20, salience: 18 },
  ]);

  const [mode, setMode] = useState("monthly");
  const [display, setDisplay] = useState("sentiment");

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleDisplayChange = (newDisplay) => {
    setDisplay(newDisplay);
  };

  const chartData = data.slice(-6); // only show last 6 data points
  return (
    <div className="graph-section">
      <div className="graph-time_buttons">
        <button onClick={() => handleModeChange("monthly")}>Monthly</button>
        <button onClick={() => handleModeChange("weekly")}>Weekly</button>
        <button onClick={() => handleModeChange("daily")}>Daily</button>
      </div>

      <div className="graph-stat_buttons">
        <button onClick={() => handleDisplayChange("sentiment")}>
          Sentiment
        </button>
        <button onClick={() => handleDisplayChange("salience")}>
          Salience
        </button>
      </div>

      <LineChart
        width={400}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={display} stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default GraphSection;
