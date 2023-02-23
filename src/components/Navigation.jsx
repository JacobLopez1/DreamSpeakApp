import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = (selected) => {
    return (
        <nav className='navigation-bar'>
            <Link to="/home" className={`nav-link ${selected.selected.active === "home" ? "selected" : ""}`}><HomeIcon />Home</Link >
            <Link to="/calendar" className={`nav-link ${selected.selected.active === "calendar" ? "selected" : ""}`}><CalendarMonthIcon />Calendar</Link >
            <Link to="/guides" className={`nav-link ${selected.selected.active === "guides" ? "selected" : ""}`}><SchoolIcon />Guides</Link >
            <Link to="/profile" className={`nav-link ${selected.selected.active === "profile" ? "selected" : ""}`}><AccountCircleIcon />Profile</Link >
        </nav>
    );
}

export default Navigation;
