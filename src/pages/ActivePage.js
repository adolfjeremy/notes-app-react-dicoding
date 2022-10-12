import React, { useState, useContext, useEffect } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { getActiveNotes } from "../utils/network-data";
import NoteList from "../components/NoteList";

function ActivePage() {
    const { locale } = useContext(LocaleContext);
    let [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            const { data } = await getActiveNotes();
            setNotes(data);
        };
        fetchNotes();
    }, []);
    return (
        <div className="page">
            <h1>{locale === "id" ? "catatan aktif" : "active notes"}</h1>
            <NoteList notes={notes} />
        </div>
    );
}

export default ActivePage;
