import React, { useState, useRef, useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";
import { NavLink, Link } from "react-router-dom";
import { MdClose, MdViewHeadline } from "react-icons/md";
import {
    BsTranslate,
    BsBoxArrowRight,
    BsFillSunFill,
    BsMoonFill,
} from "react-icons/bs";

import "../styles/header.css";

function Header({ isAuthed, logout }) {
    const { locale, toggleLocale } = useContext(LocaleContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    let [active, setActive] = useState(false);

    const menu = useRef(null);
    const closeMenu = () => setActive(false);
    const closeOpenMenus = (e) => {
        if (menu.current && active && !menu.current.contains(e.target)) {
            closeMenu();
        }
    };
    document.addEventListener("mousedown", closeOpenMenus);
    return (
        <header>
            <Link to="/" className="app_name">
                {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
            </Link>
            <nav className={active ? "show" : ""}>
                <ul>
                    {isAuthed && (
                        <>
                            <li className="nav_item">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                    end
                                    to="/"
                                    onClick={closeMenu}
                                >
                                    {locale === "id" ? "aktif" : "active"}
                                </NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                    to="/arsip"
                                    onClick={closeMenu}
                                >
                                    {locale === "id" ? "arsip" : "archive"}
                                </NavLink>
                            </li>
                            <li className="nav_item">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                    to="/tambah-catatan"
                                    onClick={closeMenu}
                                >
                                    {locale === "id"
                                        ? "tambah catatan"
                                        : "add note"}
                                </NavLink>
                            </li>
                            <li className="nav_item">
                                <button
                                    title={
                                        locale === "id" ? "keluar" : "sign out"
                                    }
                                    onClick={logout}
                                >
                                    <BsBoxArrowRight />
                                </button>
                            </li>
                        </>
                    )}
                    <li className="nav_item">
                        <button onClick={toggleTheme}>
                            {theme === "dark" ? (
                                <BsFillSunFill />
                            ) : (
                                <BsMoonFill />
                            )}
                        </button>
                    </li>
                    <li className="nav_item">
                        <button
                            onClick={toggleLocale}
                            title={
                                locale === "id"
                                    ? "translate to english"
                                    : "terjemahkan ke bahasa indonesia"
                            }
                        >
                            <BsTranslate />
                        </button>
                    </li>
                </ul>
            </nav>
            <button ref={menu} onClick={() => setActive(!active)}>
                {active ? <MdClose /> : <MdViewHeadline />}
            </button>
        </header>
    );
}

Header.propTypes = {
    isAuthed: PropTypes.object,
    logout: PropTypes.func.isRequired,
};

export default Header;
