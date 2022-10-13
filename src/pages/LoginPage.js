import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import LocaleContext from "../contexts/LocaleContext";
import Input from "../components/Input";
import { login } from "../utils/network-data";
import "../styles/auth.css";

function LoginPage({ onLoginSuccess }) {
    const { locale } = useContext(LocaleContext);
    const [email, onEmailChange] = useInput("");
    const [password, onPasswordChange] = useInput("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const { error, data } = await login({ email, password });
        if (!error) {
            onLoginSuccess(data);
        }
    };
    return (
        <section className="auth-container page">
            <h1>
                {locale === "id"
                    ? "masuk untuk menggunakan aplikasi."
                    : "please login to use the app."}
            </h1>
            <form onSubmit={onSubmitHandler}>
                <Input
                    value={email}
                    handleChange={onEmailChange}
                    name="email"
                    type="email"
                    placeHolder="email"
                />
                <Input
                    value={password}
                    handleChange={onPasswordChange}
                    name="password"
                    type="password"
                    placeHolder="password"
                />
                <button type="submit">
                    {locale === "id" ? "masuk" : "login"}
                </button>
            </form>
            {locale === "id" ? (
                <p>
                    Belum punya akun? <Link to="/register">Daftar disini</Link>
                </p>
            ) : (
                <p>
                    Don't have an account?{" "}
                    <Link to="/register">Register here</Link>
                </p>
            )}
        </section>
    );
}

LoginPage.propTypes = {
    onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
