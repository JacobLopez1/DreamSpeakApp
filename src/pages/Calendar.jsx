import React from 'react';
import AddToJournalButton from '../components/AddToJournalButton';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import './Calendar.css';
import CalendarButton from '../components/CalendarButton';
import MobileCalendar from 'react-scroll-calendar';
import "react-scroll-calendar/build/react-scroll-calendar.css"; 

const Calendar = (active) => {
    return (
        <div className='calendar'>
            <div className="upper" style={{position: "fixed", height: "85px", zIndex: "999"}}>
                <SearchBar />
            </div>
            <MobileCalendar className="mobile-calendar" enableYearTitle={false}/>
            <CalendarButton />
            <AddToJournalButton />
            <Navigation selected={active}/>
        </div>
    );
}

export default Calendar;
