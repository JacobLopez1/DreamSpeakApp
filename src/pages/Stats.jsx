import React from 'react';
import AddToJournalButton from '../components/AddToJournalButton';
import GraphSection from '../components/GraphSection';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import './Stats.css'

const Stats = (active) => {
    return (
        <div className='stats'>
            <div className="upper" style={{height: "85px", zIndex: "999", backgroundColor: "transparent", top: "0", overflow: "hidden", position: "relative"}}>
                <SearchBar />
            </div>

            <GraphSection />

            <Navigation selected={active}/>
            <AddToJournalButton />
        </div>
    );
}

export default Stats;
