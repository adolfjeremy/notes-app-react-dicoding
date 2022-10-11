import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import PropTypes from "prop-types";
import Input from "./Input";

function SearchBar({ keyword, handleChange }) {
    const { locale } = useContext(LocaleContext);
    return (
        <Input
            value={keyword}
            placeHolder={
                locale === "id"
                    ? "cari berdasarkan judul"
                    : "search base on title"
            }
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
