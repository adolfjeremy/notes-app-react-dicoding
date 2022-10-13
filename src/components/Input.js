import React from "react";
import PropTypes from "prop-types";

function Input({
    value,
    handleChange,
    type = "text",
    placeHolder,
    className,
    name,
}) {
    return (
        <input
            type={type}
            value={value}
            onChange={(e) => handleChange(e)}
            placeholder={placeHolder}
            className={className}
            name={name}
            autoComplete="off"
        />
    );
}

Input.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    name: PropTypes.string,
    placeHolder: PropTypes.string.isRequired,
};

export default Input;
