import React, { useState } from "react";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data";

function ArchivedPage() {
    let [notes] = useState(getArchivedNotes);
    return (
        <div className="page">
            <h1>catatan arsip</h1>
            <NoteList notes={notes} />
        </div>
    );
}

export default ArchivedPage;
