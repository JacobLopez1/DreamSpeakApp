import React from 'react';
import logo from '../assets/favicons/white-trans.png';
import './LaunchPage.css';

const LaunchPage = () => {
    return (
        <div className='LaunchPage'>
            <img src={logo} alt='DreamSpeak Logo' className='Logo'/>
        </div>
    );
}

export default LaunchPage;
