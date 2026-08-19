import { Link } from "react-router-dom";
import "./Login.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext"

export default function Login() {
    const { darkMode, toggle } = useContext(DarkModeContext);

    return (
        <div className="login">
            <div className="simple-background">
                {[...Array(200)].map((_, i) => (
                    <div key={i} className="dot" />
                ))}
            </div>

            {darkMode ? (
                <i className="fas fa-sun theme-toggle theme-toggle-sun" onClick={toggle}></i>
            ) : (
                <i className="fas fa-moon theme-toggle theme-toggle-moon" onClick={toggle}></i>
            )}

            <div className="login-box">
                <div className="title">
                    <span className="please-span">Please enter your details below</span>
                    <span className="welcome-span">Welcome Back</span>
                </div>

                <div className="inputs">
                    <div className="label-and-input">
                        <label htmlFor="email" className="label">
                            Email
                        </label>
                        <input 
                            type="email"
                            className="input-email input"
                            id="email"
                        />
                    </div>

                    <div className="label-and-input">
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input 
                            type="password"
                            className="input-password input"
                            id="password"
                        />
                    </div>
                </div>

                <div className="remember-me-and-forgot-password">
                    <div className="remember-me">
                        <input type="checkbox" className="remember-me-checkbox" id="remember-me" />
                        <label htmlFor="remember-me" className="remember-me-label">Remember me</label>
                    </div>

                    <div className="forgot-password">
                        <Link className="forgot-password-link">Forgot password</Link>
                    </div>
                </div>

                <button className="send-button">Sign In</button>

                <div className="line">
                    <span className="line-span">Or</span>
                </div>

                <div className="other-options">
                    <Link className="google-link option-link">
                        <i className="fab fa-google icon-google option-icon"></i>
                    </Link>

                    <Link className="facebook-link option-link">
                        <i className="fab fa-facebook icon-facebook option-icon"></i>
                    </Link>

                    <Link className="microsoft-link option-link">
                        <i className="fab fa-microsoft icon-microsoft option-icon"></i>
                    </Link>
                </div>

                <div className="switch-page">
                    <span className="switch-page-span">
                        Create account <Link to={"/register"} className="switch-page-link">Sign Up</Link>
                    </span>
                </div>
            </div>

            <div className="back-box"></div>
        </div>
    );
}