import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { MdViewHeadline } from "react-icons/md";
import "../styles/header.css";

function Header() {
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
                Aplikasi Catatan
            </Link>
            <nav className={active ? "show" : ""}>
                <ul>
                    <li className="nav_item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                            end
                            to="/"
                            onClick={closeMenu}
                        >
                            aktif
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
                            arsip
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
                            tambah catatan
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <button ref={menu} onClick={() => setActive(!active)}>
                {active ? <MdClose /> : <MdViewHeadline />}
            </button>
        </header>
    );
}

export default Header;
