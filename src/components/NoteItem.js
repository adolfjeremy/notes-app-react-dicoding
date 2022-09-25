import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { showFormattedDate } from "../utils";

function NoteItem({ title, timeStamp, body, id }) {
    return (
        <div className="note_item">
            <h2>
                <Link to={`/note/${id}`}>{title}</Link>
            </h2>
            <span>{showFormattedDate(timeStamp)}</span>
            <div className="body">
                {parse(
                    body.length > 100 ? `${body.substring(0, 100)}...` : body
                )}
            </div>
        </div>
    );
}

NoteItem.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default NoteItem;
