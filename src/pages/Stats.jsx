import React from 'react';
import AddToJournalButton from '../components/AddToJournalButton';
import GraphSection from '../components/GraphSection';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import './Stats.css'
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

const Stats = (active) => {
    return (
        <div className='stats'>
            <div className="upper" style={{height: "85px", zIndex: "999", backgroundColor: "transparent", top: "0"}}>
                <SearchBar />
            </div>

            <div className="badges">
                <div className="badge"><NoteAltOutlinedIcon /><span className="badge-num">10</span><span className="badge-title">entries</span></div>
                <div className="badge"><LocalFireDepartmentOutlinedIcon /><span className="badge-num">10</span><span className="badge-title">streak</span></div>
                <div className="badge"><ImageOutlinedIcon /><span className="badge-num">10</span><span className="badge-title">sketches</span></div>
            </div>

            <GraphSection />

            <Navigation selected={active}/>
            <AddToJournalButton />
        </div>
    );
}

export default Stats;
