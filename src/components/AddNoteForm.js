import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import InputDiv from "./InputDiv";
import { BsFillFolderFill } from "react-icons/bs";
import "../styles/addNote.css";

function AddNoteForm({ handleSubmit, title, handleChange, body, handleInput }) {
    return (
        <div className="form_wrapper">
            <form onSubmit={handleSubmit}>
                <Input
                    value={title}
                    handleChange={handleChange}
                    placeHolder="judul catatan"
                    name="title"
                    className="form_input"
                    type="text"
                />
                <InputDiv handleInput={handleInput} body={body} />
                <button type="submit">
                    <BsFillFolderFill />
                    Save
                </button>
            </form>
        </div>
    );
}

AddNoteForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    title: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    body: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
};

export default AddNoteForm;
