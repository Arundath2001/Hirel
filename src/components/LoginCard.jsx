import React from "react";
import './LoginCard.css';
import Inputicon from "./Inputicon";
import mail from "../assets/mail.png";
import password from "../assets/password.png";
import LineText from "./LineText";
import { useNavigate } from "react-router-dom";


function LoginCard(){

    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate("/signup");
    }

    return(
        <div className="logincard">
            <div className="logincard_data">
            <h3>Hirel</h3>

            <div className="logincard_main">
                <h4>Login into your account</h4>

                <Inputicon text="Email Address" image={mail} placeholder="Enter your email" type="text" />

                <Inputicon text="Password" image={password} placeholder="Enter your password" type="password" />

                <a className="forgot_link" href="">Forgot Password?</a>

                <button className="logincard_loginbtn">Login Now</button>

                <LineText />

                <button onClick={handleSignUp} className="logincard_signupbtn">Signup Now</button>

            </div>
            </div>
        </div>
    );
}

export default LoginCard;