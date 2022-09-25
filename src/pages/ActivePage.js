import React, { useState } from "react";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/local-data";

function ActivePage() {
    let [notes] = useState(getActiveNotes);
    return (
        <div className="page">
            <h1>catatan aktif</h1>
            <NoteList notes={notes} />
        </div>
    );
}

export default ActivePage;
