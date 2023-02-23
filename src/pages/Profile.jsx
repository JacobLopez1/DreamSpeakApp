import React from 'react';
import AddToJournalButton from '../components/AddToJournalButton';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';

const Profile = (active) => {
    return (
        <div>
            <div className="upper" style={{position: "fixed", height: "85px", zIndex: "999", backgroundColor: "transparent"}}>
                <SearchBar />
            </div>

            <div className="header">
                
            </div>

            <Navigation selected={active}/>
            <AddToJournalButton />
        </div>
    );
}

export default Profile;
