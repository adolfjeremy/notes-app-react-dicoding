import React, { useState, useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/local-data";

function ArchivedPage() {
    const { locale } = useContext(LocaleContext);
    let [notes] = useState(getArchivedNotes);
    return (
        <div className="page">
            <h1>{locale === "id" ? "catatan arsip" : "archived notes"}</h1>
            <NoteList notes={notes} />
        </div>
    );
}

export default ArchivedPage;
