import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './form.css'


export default function Register() {
    const navigate = useNavigate('')
    //navigate to login when register button is clicked
    const handleRegister = (e) => {
        e.preventDefault();

        navigate('/verify_email')
    }

    return (
        <div className="center">
            <div className="auth">
                <h1>Register</h1>
                <form name="registration_form" onSubmit={handleRegister}>
                    <input
                        type='email'
                        placeholder="Enter your email"
                    />

                    <input
                        type='password'
                        placeholder="Please, enter your password"
                    />

                    <input 
                        type='password'
                        placeholder="Please, re-enter your password"
                    />

                    <button type="submit">Register</button>
                </form>
                <span>
                    Already have an account ? 
                    <Link to='/login'>login</Link>
                </span>
            </div>
        </div>
    )
}