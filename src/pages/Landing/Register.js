import React, { useState } from 'react';
import "./Register.css";
import userAction from '../../services/user'

const Register = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password == confirmPassword) {
            userAction.doRegister(userName, password).then(res => {
                if (res != '') {
                    console.log(res)
                    setErrorMsg(res)
                }
            })
        }
        else {
            setErrorMsg('Password and Confirm Password do not match')
        }
    }

    const handleUsernameChange = (event) => {
        setErrorMsg('')
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setErrorMsg('')
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setErrorMsg('')
        setConfirmPassword(event.target.value);
    }

    return (
        <div className="register">
            <h1> Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type={"email"} placeholder={"Email"} value={userName} onChange={handleUsernameChange}/>
                <input type={"password"} placeholder={"Password"} value={password} onChange={handlePasswordChange}/>
                <input type={"password"} placeholder={"Confirm Password"} value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                { errorMsg != null ? (<div className='error'>{errorMsg}</div>) : null }
                <button type={"submit"}> Sign Up</button>

            </form>

        </div>
    )
}

export default Register