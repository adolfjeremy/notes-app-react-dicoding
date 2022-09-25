import React from "react";
import PropTypes from "prop-types";

function InputDiv({ handleInput, body }) {
    return (
        <div
            className="form_div"
            data-placeholder="catatan pribadi..."
            contentEditable
            onInput={handleInput}
            value={body}
        ></div>
    );
}

InputDiv.propTypes = {
    handleInput: PropTypes.func.isRequired,
    value: PropTypes.string,
};

export default InputDiv;
