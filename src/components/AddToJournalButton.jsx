import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import './AddToJournalButton.css';

const AddToJournalButton = () => {
    return (
        <div>
            <button className="add-to-journal-button">
                <AddIcon />
            </button>
        </div>
    );
}

export default AddToJournalButton;
