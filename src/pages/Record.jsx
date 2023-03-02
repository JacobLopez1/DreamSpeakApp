import React from 'react';
import './Record.css';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const Record = () => {
    const navigate = useNavigate();

    return (
        <div className='record'>
            <div className="record-top">
                <CloseOutlinedIcon onClick={() => navigate(-1)} className="closeIcon"/>
            </div>

            <div className="record-text--main">
                <h1>How was your dream?</h1>
                <p>Record your dream, and we'll jot it down for you.</p>
            </div>

            <div className="record-text--input">
                <textarea placeholder="Enter your dream here..."></textarea>
            </div>

            <div className="record-bottom">
                <IconButton className='record-button'><GraphicEqOutlinedIcon /></IconButton>
                <p>TAP TO START</p>
                <Link to="/editEntry/1" className='pen-button--anchor'>
                    <IconButton className='pen-button'><EditOutlinedIcon /></IconButton>
                </Link>
            </div>
        </div>
    );
}

export default Record;
