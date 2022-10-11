import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import PropTypes from "prop-types";

function InputDiv({ handleInput, body }) {
    const { locale } = useContext(LocaleContext);
    return (
        <div
            className="form_div"
            data-placeholder={
                locale === "id" ? "catatan pribadi..." : "personal note..."
            }
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
