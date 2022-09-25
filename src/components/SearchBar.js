import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function SearchBar({ keyword, handleChange }) {
    return (
        <Input
            value={keyword}
            placeHolder="cari berdasarkan judul"
            handleChange={handleChange}
            className="search_bar"
            name="search"
            type="text"
        />
    );
}

SearchBar.propTypes = {
    keyword: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

export default SearchBar;
