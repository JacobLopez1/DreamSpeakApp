import React from "react";
import { useNavigate } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MoodIcon from "@mui/icons-material/Mood";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import "./EditEntry.css";
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

const EditEntry = () => {
  const navigate = useNavigate();

  return (
    <div className="editEntry">
      <div className="editEntry-top">
        <div className="editEntry-top--placeholder" />
        <p className="editEntry-top--date">June 1, 8:45 AM</p>
        <CloseOutlinedIcon onClick={() => navigate(-1)} className="closeIcon" />
      </div>

      <div className="editEntry-main">
        <div className="editEntry-text--titleAndRatings">
          <input className="editEntry-text--title" placeholder="Title ..." />

          <div className="editEntry-ratings">
            <div className="editEntry-rating">
              <MoodIcon />
              5.5
            </div>
            <div className="editEntry-rating">
              <CloudOutlinedIcon />
              5.5
            </div>
          </div>
        </div>

        <div className="editEntry-input">
          <textarea placeholder="Enter your dream here..." />
        </div>

        <div className="editEntry-sketchTags">
          <div className="editEntry-addSketch">
            <CameraAltOutlinedIcon />
            <p>Add Sketch</p>
          </div>

          <div className="editEntry-tags">
            <p>Tags</p>
            <div className="editEntry-tags--input">
                <input placeholder="Add tags ..." />
            </div>
          </div>
        </div>

        <button
          className="editEntry-submit--button"
          onClick={() => navigate("/home")}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditEntry;
