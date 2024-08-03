import React from "react";
import './LoginCard.css';
import Inputicon from "./Inputicon";
import mail from "../assets/mail.png";
import password from "../assets/password.png";
import LineText from "./LineText";


function LoginCard(){
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

                <button className="logincard_signupbtn">Signup Now</button>

            </div>
            </div>
        </div>
    );
}

export default LoginCard;