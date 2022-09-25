import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteItem from "./NoteItem";
import SearchBar from "./SearchBar";
import "../styles/note.css";

function NoteList({ notes }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get("query") || "";
    const handleChange = (e) => {
        setSearchParams({ query: e.target.value });
    };

    let datas = notes.filter((data) =>
        data.title.toLowerCase().includes(keyword.toLowerCase())
    );
    return (
        <>
            <SearchBar keyword={keyword} handleChange={handleChange} />
            {datas.length ? (
                <div className="note_list">
                    {datas.map((data, index) => (
                        <NoteItem
                            title={data.title}
                            timeStamp={data.createdAt}
                            body={data.body}
                            id={data.id}
                            key={index}
                        />
                    ))}
                </div>
            ) : (
                <div className="empty_list">
                    {keyword.length ? (
                        <p>
                            tidak ada catatan dengan judul
                            <strong> {keyword}</strong>
                        </p>
                    ) : (
                        <p>tidak ada catatan</p>
                    )}
                </div>
            )}
        </>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object),
};

export default NoteList;
