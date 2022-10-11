import React, { useState, useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/local-data";

function ActivePage() {
    const { locale } = useContext(LocaleContext);
    let [notes] = useState(getActiveNotes);
    return (
        <div className="page">
            <h1>{locale === "id" ? "catatan aktif" : "active notes"}</h1>
            <NoteList notes={notes} />
        </div>
    );
}

export default ActivePage;
