import React, { useState } from 'react';
import "./Login.css";
import userAction from '../../services/user'

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        userAction.doLogin(userName, password)
    }

    const handleUsernameChange = (event) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type={"email"} placeholder={"Email"} value={userName} onChange={handleUsernameChange}/>
                <input type={"password"} placeholder={"Password"} value={password} onChange={handlePasswordChange}/>
                <button type={"submit"}>Login</button>
            </form>
            <h4>If not a member, need to register</h4>

        </div>
    );
};

export default Login;