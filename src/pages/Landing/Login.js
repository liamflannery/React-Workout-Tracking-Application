import React, { useState } from 'react';
import "./Login.css";
import userAction from '../../services/user'

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        userAction.doLogin(userName, password).then(res => {
            if (res != '') {
                console.log(res)
                setErrorMsg(res)
            }
        })
    }

    const handleUsernameChange = (event) => {
        setErrorMsg('')
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setErrorMsg('')
        setPassword(event.target.value);
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type={"email"} placeholder={"Email"} value={userName} onChange={handleUsernameChange}/>
                <input type={"password"} placeholder={"Password"} value={password} onChange={handlePasswordChange}/>
                { errorMsg != null ? (<div className='error'>{errorMsg}</div>) : null }
                <button type={"submit"}>Login</button>
            </form>
            <h4>If not a member, need to register</h4>

        </div>
    );
};

export default Login;