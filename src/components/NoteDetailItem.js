import React from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

function NoteDetailItem({ title, createdAt, body }) {
    return (
        <div className="note_detail_item">
            <h2>{title}</h2>
            <span>{showFormattedDate(createdAt)}</span>
            <div className="body">{parse(body)}</div>
        </div>
    );
}

NoteDetailItem.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default NoteDetailItem;
