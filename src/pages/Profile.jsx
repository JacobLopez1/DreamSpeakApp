import React from 'react';
import AddToJournalButton from '../components/AddToJournalButton';
import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import building from '../assets/building.png';

const Profile = (active) => {
    return (
        <div>
            <div className="upper" style={{position: "fixed", height: "85px", zIndex: "999", backgroundColor: "transparent"}}>
                <SearchBar />
            </div>

            <div style={{position: "absolute", right: "20px", top: "20%"}}>
                <img src={building} alt="building" style={{width: "300px", height: "250px"}}/>
                <h1 style={{textAlign: "center"}}>Building...</h1>
            </div>

            <Navigation selected={active}/>
            <AddToJournalButton />
        </div>
    );
}

export default Profile;
