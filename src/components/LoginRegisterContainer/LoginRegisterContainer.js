//import the css
import { useRef, useState } from "react";
import Login from "../../pages/Landing/Login";
import Register from "../../pages/Landing/Register";
import "./LoginRegisterContainer.css";

const LoginRegisterContainer = () => {
    const [login, setLogin] = useState(true);

    const loginRegisterContainerRef = useRef(null);

    const handleClick =() => {
        setLogin(!login);

        loginRegisterContainerRef.current.classList.toggle("active");
    };
   
    return (
    <div className="login-register-container" ref={loginRegisterContainerRef}>
        <Login/> 
        <div className="side-div">
            <button type="button" onClick={handleClick}> 
            {" "}
            {login ? "Register" : "Login"}
            </button>

        </div>
       <Register/> 
        </div>
    );
};
export default LoginRegisterContainer