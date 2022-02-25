import { useState } from "react";
import { nanoid } from 'nanoid';
import { NotesList } from "./components/NotesList";

export function App () {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First note",
      date: "15/02/2022"
    },
    {
      id: nanoid(),
      text: "Second note",
      date: "15/02/2022"
    },
    {
      id: nanoid(),
      text: "Third note",
      date: "15/02/2022"
    }
]);

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  )
}
