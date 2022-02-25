import { AddNote } from "./AddNote"
import { Note } from "./Note"


export function NotesList({ notes }) {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note id={note.id} text={note.text} date={note.date}/>
            ))}
            <AddNote />
        </div>
    )
}