import React, { useState } from "react";
import './LoginCard.css';
import Inputicon from "./Inputicon";
import mail from "../assets/mail.png";
import pswd from "../assets/pswd.png";
import LineText from "./LineText";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function LoginCard() {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://warm-victorious-skirt.glitch.me/login', {
                fullName,
                password
            });

            if (response.status === 200) {
                navigate("/Home");
                setError('');
            }
        } catch (error) {
            setError('Invalid full name or password');
        }
    }

    const handleSignUp = () => {
        navigate("/signup");
    }

    return (
        <div className="logincard">
            <div className="logincard_data">
                <h3>Hirel</h3>

                <div className="logincard_main">
                    <h4>Login into your account</h4>

                    <Inputicon 
                        text="Username" 
                        image={mail} 
                        placeholder="Enter your Full Name" 
                        type="text"
                        value={fullName} 
                        onChange={(e) => setFullName(e.target.value)} 
                    />

                    <Inputicon 
                        text="Password" 
                        image={pswd} 
                        placeholder="Enter your Password" 
                        type="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <a className="forgot_link" href="">Forgot Password?</a>

                    <button 
                        type="submit" 
                        className="logincard_loginbtn" 
                        onClick={handleLogin}
                    >
                        Login Now
                    </button>
                    
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    
                    <LineText />

                    <button onClick={handleSignUp} className="logincard_signupbtn">Signup Now</button>
                </div>
            </div>
        </div>
    );
}

export default LoginCard;
