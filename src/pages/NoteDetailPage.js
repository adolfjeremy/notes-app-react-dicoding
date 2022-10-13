import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import {
    getNote,
    archiveNote,
    unarchiveNote,
    deleteNote,
} from "../utils/network-data";
import NoteDetailItem from "../components/NoteDetailItem";
import Button from "../components/Button";
import { BsFillTrashFill } from "react-icons/bs";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { BsBookmarkDashFill } from "react-icons/bs";
import Loading from "../components/Loading";
import "../styles/noteDetail.css";

function NoteDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [noteDetail, setNoteDetail] = useState();
    const { locale } = useContext(LocaleContext);
    let [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNoteDetail = async () => {
            const { data } = await getNote(id);
            setNoteDetail(data);
            setLoading(false);
        };
        fetchNoteDetail();
    }, [id]);

    const handleDelete = async (noteId) => {
        const { error } = await deleteNote(noteId);
        if (!error) {
            navigate("/");
        }
    };

    const handleArchieve = async (noteId) => {
        const { error } = await archiveNote(noteId);
        if (!error) {
            navigate("/");
        }
    };

    const handleActivate = async (noteId) => {
        const { error } = await unarchiveNote(noteId);
        if (!error) {
            navigate("/");
        }
    };
    return isLoading ? (
        <div className="page">
            <Loading />
        </div>
    ) : noteDetail ? (
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
        <div className="page">
            {locale === "id" ? "Catatan Tidak ditemukan" : "Notes Not found"}
        </div>
    );
}

export default NoteDetailPage;
