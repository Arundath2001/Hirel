import React, { useState } from "react";
import './Signup.css';
import Inputicon from "./Inputicon";
import mail from "../assets/mail.png";
import password from "../assets/pswd.png";
import LineText from "./LineText";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post('https://warm-victorious-skirt.glitch.me/signup', formData);
            alert(response.data.message);
            navigate("/");
        } catch (error) {
            console.error('Error signing up:', error.response ? error.response.data : error);
            alert('Failed to sign up. Please try again.');
        }
    };

    const handleLogin = () => {
        navigate("/");
    };

    return (
        <div className="logincard">
            <div className="logincard_data">
                <h3>Hirel</h3>

                <div className="logincard_main">
                    <h4>Create your account</h4>
                    <form onSubmit={handleSubmit}>
                        <Inputicon text="Full Name" name="fullName" image={mail} placeholder="Enter your Full Name" type="text" onChange={handleChange} />
                        <Inputicon text="Mobile Number" name="mobileNumber" image={mail} placeholder="Enter your Mobile Number" type="text" onChange={handleChange} />
                        <Inputicon text="Email Address" name="email" image={mail} placeholder="Enter your Email" type="text" onChange={handleChange} />

                        <Inputicon text="Password" name="password" image={password} placeholder="Enter your New Password" type="password" onChange={handleChange} />
                        <Inputicon text="Confirm Password" name="confirmPassword" image={password} placeholder="Confirm your Password" type="password" onChange={handleChange} />

                        <button type="submit" className="logincard_signupbtn">Submit</button>
                    </form>
                    <LineText />

                    <button onClick={handleLogin} className="logincard_loginbtn">Login Now</button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
