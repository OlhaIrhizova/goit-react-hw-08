import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./Login.module.css"
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

const LoginForm= () => {
    const [showPassword, setShowPassword] = useState(false);
   const initialValues = {
        email : '',
        password: '',
        }

        const dispatch = useDispatch();
        const navigate = useNavigate();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const validationSchema = Yup.object().shape({
            email: Yup.string().email('Invalid email format').required('Required').matches(emailRegex, 'Invalid email format'),
            password: Yup.string().min(6, 'Min 6 symbols').required('Required'),
          });
        const handleSubmit = (values, options) => {
            dispatch(loginThunk(values))
            .unwrap()
            .then((response) => {
                toast.success(`Welcome ${response.user.name}`);
                navigate('/contacts', {replace:true})})
            .catch(() => toast.error('Invalid data'));
        
            options.resetForm();
    }
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return(
      <div className={css.formWrapper}>

        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>

                               
            <Form className={css.contactForm}> 
               <label className={css.label}> Email
                    <Field  name = 'email' type = 'email' className = {css.input} />
                    <ErrorMessage className={css.error} component='span' name='email'/>
                </label>
                <label className={css.label}> Password
                    <div className={css.passwordWrapper}>
                 <Field name="password" type={showPassword ? 'text' : 'password'} className={css.input} />
                 <button type="button" className={css.passwordToggle} onClick={togglePasswordVisibility}>
                 {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
    </button>
  </div>
               
                   
                    <ErrorMessage className={css.error} component='span' name='password'/>
                </label>
                <button className={css.formBtn} type="submit">Login</button>
                
                                   
             </Form>
                            
        </Formik>
    </div>
    )
}

export default LoginForm;