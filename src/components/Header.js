import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [loginbtn, setLoginBtn] = useState("Login");
    console.log ("header rendered");

    // example for useEffect
    useEffect(() => {
        console.log("useEffect called");
    }, []);

    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" 
                src={LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => {
                    loginbtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                }}>{loginbtn}</button>
            </ul>
        </div>
    </div>
    );
};

export default Header;