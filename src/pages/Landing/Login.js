import "./Login.css";

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <input type={"email"} placeholder={"Email"}/>
                <input type={"password"} placeholder={"Password"}/>
                <button type={"submit"}>Login</button>
            </form>
            <h4>If not a member, need to register</h4>

        </div>
    );
};

export default Login;