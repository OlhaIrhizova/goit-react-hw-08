import LoginForm from "../../components/loginForm/LoginForm";
import css from "./Login.module.css";

const Login = () => {
return (
    <div className={css.loginContainer}>
        <LoginForm/>
    </div>
)
}

export default Login;