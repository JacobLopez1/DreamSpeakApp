import React from "react";
import "./HomePage.css";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import LaunchPage from "./LaunchPage";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineSeparator } from '@mui/lab'
import SampleImage from '../assets/sunrise.jpg';
import Navigation from "../components/Navigation";
import AddToJournalButton from "../components/AddToJournalButton";

const HomePage = (active) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 200);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {loading ? (
        <LaunchPage />
      ) : (
        <div className="HomePage">
          <div className="upper">
            <SearchBar />
            <div className="welcome">
              <p>Welcome, Jacob!</p>
            </div>
            <div className="highlights">
              <p className="highlights-title">Highlights</p>
              <div className="highlights-container">
                <div className="highlight">
                  <div className="icon-circle">
                    <WbSunnyOutlinedIcon />
                  </div>
                  <p className="highlight-title">Today</p>
                </div>
                <div className="highlight">
                  <div className="icon-circle">
                    <WbSunnyOutlinedIcon />
                  </div>
                  <p className="highlight-title">Today</p>
                </div>
                <div className="highlight">
                  <div className="icon-circle">
                    <WbSunnyOutlinedIcon />
                  </div>
                  <p className="highlight-title">Today</p>
                </div>
                <div className="highlight">
                  <div className="icon-circle">
                    <WbSunnyOutlinedIcon />
                  </div>
                  <p className="highlight-title">Today</p>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline">
            <Timeline
                  sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    }
                  }}
            >
                <TimelineItem>
                    <TimelineSeparator sx={{height: "300px"}} >
                        <TimelineDot sx={{bgcolor: "#7FA1E8", top: "-2px", position: "absolute"}}/>
                        <TimelineConnector sx={{marginLeft: "4.5px", marginTop: "20px"}}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{lineHeight: "0.9", paddingRight: "0", paddingLeft: "8px"}}>
                        <span className="entry-title">My First Dream!</span><br /><br />
                        <span className="entry-date">February 15, 2023</span><br />
                        <span className="entry-time">9:45 am</span><br />
                        <img src={SampleImage} alt="Sample" className="entry-image" /><br />
                        <span className="entry-text">I had the most incredible dream last night. I was walking through a field of flowers, and the sun was setting, casting everything...</span>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator sx={{height: "300px"}} >
                        <TimelineDot sx={{bgcolor: "#7FA1E8", top: "-2px", position: "absolute"}}/>
                        <TimelineConnector sx={{marginLeft: "4.5px", marginTop: "0px"}}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{lineHeight: "0.9", paddingRight: "0", paddingLeft: "8px"}}>
                        <span className="entry-title">My First Dream!</span><br /><br />
                        <span className="entry-date">February 15, 2023</span><br />
                        <span className="entry-time">9:45 am</span><br />
                        <img src={SampleImage} alt="Sample" className="entry-image" /><br />
                        <span className="entry-text">I had the most incredible dream last night. I was walking through a field of flowers, and the sun was setting, casting everything...</span>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator sx={{height: "300px"}} >
                        <TimelineDot sx={{bgcolor: "#7FA1E8", top: "-2px", position: "absolute"}}/>
                        <TimelineConnector sx={{marginLeft: "4.5px", marginTop: "0px"}}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{lineHeight: "0.9", paddingRight: "0", paddingLeft: "8px"}}>
                        <span className="entry-title">My First Dream!</span><br /><br />
                        <span className="entry-date">February 15, 2023</span><br />
                        <span className="entry-time">9:45 am</span><br />
                        <img src={SampleImage} alt="Sample" className="entry-image" /><br />
                        <span className="entry-text">I had the most incredible dream last night. I was walking through a field of flowers, and the sun was setting, casting everything...</span>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator sx={{height: "300px"}} >
                        <TimelineDot sx={{bgcolor: "#7FA1E8", top: "-2px", position: "absolute"}}/>
                        <TimelineConnector sx={{marginLeft: "4.5px", marginTop: "0px"}}/>
                    </TimelineSeparator>
                    <TimelineContent sx={{lineHeight: "0.9", paddingRight: "0", paddingLeft: "8px", paddingBottom: "60px"}}>
                        <span className="entry-title">My First Dream!</span><br /><br />
                        <span className="entry-date">February 15, 2023</span><br />
                        <span className="entry-time">9:45 am</span><br />
                        <img src={SampleImage} alt="Sample" className="entry-image" /><br />
                        <span className="entry-text">I had the most incredible dream last night. I was walking through a field of flowers, and the sun was setting, casting everything...</span>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
          </div>
          <AddToJournalButton />
          <Navigation selected={active}/>
        </div>
      )}
    </>
  );
};

export default HomePage;
