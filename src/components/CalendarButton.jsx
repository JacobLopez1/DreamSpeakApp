import React from 'react';
import EventIcon from '@mui/icons-material/Event';
import './CalendarButton.css';

const CalendarButton = () => {
    return (
        <div>
            <button className="calendar-button">
                <EventIcon />
            </button>
        </div>
    );
}

export default CalendarButton;
