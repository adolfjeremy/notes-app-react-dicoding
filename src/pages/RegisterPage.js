import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import LocaleContext from "../contexts/LocaleContext";
import Input from "../components/Input";
import { register } from "../utils/network-data";
import "../styles/auth.css";

function RegisterPage() {
    const { locale } = useContext(LocaleContext);
    const [name, onNameChange] = useInput("");
    const [email, onEmailChange] = useInput("");
    const [password, onPasswordChange] = useInput("");

    const navigate = useNavigate();

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const { error } = await register({ name, email, password });
        if (!error) {
            navigate("/");
        }
    };

    return (
        <section className="auth-container page">
            <h1>
                {locale === "id"
                    ? "buat akun anda untuk menggunakan aplikasi"
                    : "please create your account to use the app"}
            </h1>
            <form onSubmit={onSubmitHandler}>
                <Input
                    value={name}
                    handleChange={onNameChange}
                    name="name"
                    type="text"
                    placeHolder={locale === "id" ? "nama" : "name"}
                />
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
                    {locale === "id" ? "daftar" : "sign up"}
                </button>
            </form>
            {locale === "id" ? (
                <p>
                    Sudah punya akun? <Link to="/">Masuk disini</Link>
                </p>
            ) : (
                <p>
                    Already have an account? <Link to="/">login here</Link>
                </p>
            )}
        </section>
    );
}

export default RegisterPage;
