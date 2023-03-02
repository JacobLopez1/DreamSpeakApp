import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import './AddToJournalButton.css';
import { Link } from 'react-router-dom';

const AddToJournalButton = () => {
    return (
        <div>
            <Link to="/record">
                <button className="add-to-journal-button">
                    <AddIcon />
                </button>
            </Link>
        </div>
    );
}

export default AddToJournalButton;
