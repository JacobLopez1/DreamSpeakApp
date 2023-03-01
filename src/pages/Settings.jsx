import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import ProfilePic from "../assets/favicons/white-trans.png";
import "./Settings.css";
import { Switch } from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { alpha, styled } from '@mui/material/styles';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Settings = () => {
  const navigate = useNavigate();
  
  const CustomSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: "#7FA1E8",
      '&:hover': {
        backgroundColor: alpha("#7FA1E8", theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: "#7FA1E8",
    },
  }));

  return (
    <div className="settings">
      <div className="settings_header">
        <div className="settings_header-left">
          <ArrowBackIcon onClick={() => navigate(-1)} />
        </div>
        <div className="settings_header-right">
          <div className="settings_profile-pic">
            <img src={ProfilePic} alt="profile pic" className="profile-pic" />
          </div>
        </div>
      </div>

      <div className="settings_accountInfo">
        <input type="text" placeholder="Jacob Lopez" />
        <input type="text" placeholder="dreamspeak@..." />
      </div>

      <div className="export-link">EXPORT DATA</div>

      <div className="settings_toggles">
        <div className="settings_toggle">
          <div className="settings_toggle-left">
            <LightbulbOutlinedIcon />
            <div className="settings_toggle-text">
              Disabled
              <br />
              <span className="settings-name">DARK MODE</span>
            </div>
          </div>
          <CustomSwitch />
        </div>
        <div className="settings_toggle">
          <div className="settings_toggle-left">
            <FingerprintIcon />
            <div className="settings_toggle-text">
              Disabled
              <br />
              <span className="settings-name">BIOMETRIC PASSCODE</span>
            </div>
          </div>
          <CustomSwitch />
        </div>
        <div className="settings_toggle">
          <div className="settings_toggle-left">
            <NotificationsIcon />
            <div className="settings_toggle-text">
              Disabled
              <br />
              <span className="settings-name">ENTRY REMINDERS</span>
            </div>
          </div>
          <CustomSwitch />
        </div>
      </div>

      <div className="settings_footer">
        <p>Version 0.1.0</p>
        <button className="settings-signOutButton">SIGN OUT</button>
        <div className="export-link">DELETE ACCOUNT</div>
      </div>
    </div>
  );
};

export default Settings;
