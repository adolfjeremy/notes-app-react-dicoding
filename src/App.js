import React, { useState, useMemo, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LocaleContext from "./contexts/LocaleContext";
import ThemeContext from "./contexts/ThemeContext";
import "./styles/global.css";
import Header from "./components/Header";
import ActivePage from "./pages/ActivePage";
import ArchivedPage from "./pages/ArchivedPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AddNotePage from "./pages/AddNotePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";

function App() {
    const [locale, setLocale] = useState(localStorage.getItem("lang") || "id");
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    const [authedUser, setAuthedUser] = useState(null);

    const toggleLocale = () => {
        setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
    };
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    const onLoginSuccess = async ({ accessToken }) => {
        putAccessToken(accessToken);
        const { data } = await getUserLogged();
        setAuthedUser(data);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            const { data } = await getUserLogged();
            setAuthedUser(data);
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        localStorage.setItem("lang", locale);
    }, [locale]);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const localeContextValue = useMemo(() => {
        return { locale, toggleLocale };
    }, [locale]);

    const themeContextValue = useMemo(() => {
        return { theme, toggleTheme };
    }, [theme]);

    return (
        <ThemeContext.Provider value={themeContextValue}>
            <LocaleContext.Provider value={localeContextValue}>
                <div className="App">
                    <Header />
                    <main>
                        <Routes>
                            {authedUser === null ? (
                                <>
                                    <Route
                                        path="/*"
                                        element={
                                            <LoginPage
                                                onLoginSuccess={onLoginSuccess}
                                            />
                                        }
                                    />
                                    <Route
                                        path="/register"
                                        element={<RegisterPage />}
                                    />
                                </>
                            ) : (
                                <>
                                    <Route path="/" element={<ActivePage />} />
                                    <Route
                                        path="/arsip"
                                        element={<ArchivedPage />}
                                    />
                                    <Route
                                        path="/tambah-catatan"
                                        element={<AddNotePage />}
                                    />
                                    <Route
                                        path="/notes/:id"
                                        element={<NoteDetailPage />}
                                    />
                                </>
                            )}
                        </Routes>
                    </main>
                </div>
            </LocaleContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
