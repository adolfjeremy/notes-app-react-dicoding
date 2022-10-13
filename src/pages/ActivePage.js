import React, { useState, useContext, useEffect } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { getActiveNotes } from "../utils/network-data";
import NoteList from "../components/NoteList";
import Loading from "../components/Loading";

function ActivePage() {
    const { locale } = useContext(LocaleContext);
    let [notes, setNotes] = useState([]);
    let [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotes = async () => {
            const { data } = await getActiveNotes();
            setNotes(data);
            setLoading(false);
        };
        fetchNotes();
    }, []);
    return (
        <div className="page">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <h1>
                        {locale === "id" ? "catatan aktif" : "active notes"}
                    </h1>
                    <NoteList notes={notes} />
                </>
            )}
        </div>
    );
}

export default ActivePage;
