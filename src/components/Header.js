import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [loginbtn, setLoginBtn] = useState("Login");
    console.log ("header rendered");

    // example for useEffect
    useEffect(() => {
        console.log("useEffect called");
    }, []);

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" 
                src={LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to ="/grocery">Grocery</Link></li>
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