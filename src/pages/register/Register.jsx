import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import css from "./Register.module.css"

const Register = () => {
   return(
    <div className={css.registerContainer}>
        <RegistrationForm/>
    </div>
   )
}

export default Register;