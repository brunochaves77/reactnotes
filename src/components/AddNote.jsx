import { useState } from "react"

export function AddNote() {
    const [noteText, setNoteText] = useState('');

    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveClick = () => {
        
    }

    return (
        <div className="note new">
            <textarea 
                cols="10" 
                rows="10" 
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handleChange}
                ></textarea>
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}