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
        <div className="flex justify-between shadow-lg">
        <div className="logo-container">
            <img className="w-28" 
                src={LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
                <li className="px-4">Cart</li>
                <button className="login-btn px-4" onClick={() => {
                    loginbtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                }}>{loginbtn}</button>
            </ul>
        </div>
    </div>
    );
};

export default Header;