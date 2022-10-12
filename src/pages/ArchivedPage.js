import React, { useState, useContext, useEffect } from "react";
import LocaleContext from "../contexts/LocaleContext";
import NoteList from "../components/NoteList";
import { getArchivedNotes } from "../utils/network-data";

function ArchivedPage() {
    const { locale } = useContext(LocaleContext);
    let [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchArchiveNote = async () => {
            const { data } = await getArchivedNotes();
            setNotes(data);
        };
        fetchArchiveNote();
    });

    return (
        <div className="page">
            <h1>{locale === "id" ? "catatan arsip" : "archived notes"}</h1>
            <NoteList notes={notes} />
        </div>
    );
}

export default ArchivedPage;
