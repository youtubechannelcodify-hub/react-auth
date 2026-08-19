import { Link } from "react-router-dom";
import "./Register.scss";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext"

export default function Register() {
    const { darkMode, toggle } = useContext(DarkModeContext);

    return (
        <div className="register">
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

            <div className="register-box">
                <div className="title">
                    <span className="please-span">Please enter your details below</span>
                    <span className="welcome-span">Welcome Back</span>
                </div>

                <div className="inputs">
                    <div className="label-and-input">
                        <label htmlFor="first-name" className="label">
                            First Name
                        </label>
                        <input 
                            type="text"
                            className="input-first-name input"
                            id="first-name"
                        />
                    </div>

                    <div className="label-and-input">
                        <label htmlFor="last-name" className="label">
                            Last Name
                        </label>
                        <input 
                            type="text"
                            className="input-last-name input"
                            id="last-name"
                        />
                    </div>

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

                    <div className="label-and-input">
                        <label htmlFor="confirm-password" className="label">
                            Confirm Password
                        </label>
                        <input 
                            type="password"
                            className="input-confirm-password input"
                            id="confirm-password"
                        />
                    </div>
                </div>

                <div className="accept-terms-and-policy">
                    <input type="checkbox" className="terms-and-policy-checkbox" />
                    <span className="terms-and-policy-span">
                        I accept the <Link className="terms-link">Terms of Use</Link> & <Link className="policy-link">Privacy Policy</Link>
                    </span>
                </div>

                <button className="send-button">Sign Up</button>

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
                        I have an account? <Link to={"/login"} className="switch-page-link">Sign In</Link>
                    </span>
                </div>
            </div>

            <div className="back-box"></div>
        </div>
    );
}