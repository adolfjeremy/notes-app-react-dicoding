import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddNoteForm from "../components/AddNoteForm";
import { addNote } from "../utils/network-data";

function AddNotePage() {
    const navigate = useNavigate();
    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = await addNote({ title, body });
        if (!error) {
            navigate("/");
        }
    };
    return (
        <div className="page">
            <AddNoteForm
                handleSubmit={handleSubmit}
                title={title}
                handleChange={(e) => setTitle(e.target.value)}
                handleInput={(e) => setBody(e.target.innerHTML)}
                body={body}
            />
        </div>
    );
}

export default AddNotePage;
