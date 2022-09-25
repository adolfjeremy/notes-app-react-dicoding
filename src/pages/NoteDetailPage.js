import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    getNote,
    deleteNote,
    archiveNote,
    unarchiveNote,
} from "../utils/local-data";
import NoteDetailItem from "../components/NoteDetailItem";
import Button from "../components/Button";
import { BsFillTrashFill } from "react-icons/bs";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { BsBookmarkDashFill } from "react-icons/bs";
import "../styles/noteDetail.css";

function NoteDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [noteDetail] = useState(getNote(id));
    const handleDelete = (noteId) => {
        deleteNote(noteId);
        navigate("/");
    };

    const handleArchieve = (noteId) => {
        archiveNote(noteId);
        navigate("/");
    };

    const handleActivate = (noteId) => {
        unarchiveNote(noteId);
        navigate("/");
    };
    return noteDetail ? (
        <div className="page">
            <NoteDetailItem {...noteDetail} />
            {noteDetail.archived ? (
                <Button
                    handleClick={handleActivate}
                    id={noteDetail.id}
                    className="archieve_button action_button"
                    children={<BsBookmarkDashFill />}
                    title="aktifkan catatan"
                />
            ) : (
                <Button
                    handleClick={handleArchieve}
                    id={noteDetail.id}
                    className="archieve_button action_button"
                    children={<BsBookmarkCheckFill />}
                    title="arsipkan catatan"
                />
            )}
            <Button
                handleClick={handleDelete}
                id={noteDetail.id}
                className="delete_button action_button"
                children={<BsFillTrashFill />}
                title="hapus catatan"
            />
        </div>
    ) : (
        <div className="page">ups... catatan ini sudah dihapus</div>
    );
}

export default NoteDetailPage;
