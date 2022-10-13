import React, { useState, useContext, useEffect } from "react";
import LocaleContext from "../contexts/LocaleContext";
import NoteList from "../components/NoteList";
import Loading from "../components/Loading";
import { getArchivedNotes } from "../utils/network-data";

function ArchivedPage() {
    const { locale } = useContext(LocaleContext);
    let [notes, setNotes] = useState([]);
    let [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArchiveNote = async () => {
            const { data } = await getArchivedNotes();
            setNotes(data);
            setLoading(false);
        };
        fetchArchiveNote();
    });

    return (
        <div className="page">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <h1>
                        {locale === "id" ? "catatan arsip" : "archived notes"}
                    </h1>
                    <NoteList notes={notes} />
                </>
            )}
        </div>
    );
}

export default ArchivedPage;
