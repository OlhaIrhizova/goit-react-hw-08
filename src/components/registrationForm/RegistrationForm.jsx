import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const initialValues = {
        name : '',
        email : '',
        password: '',
    }

    const onlyLetters = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ'-\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3,'Too short').required('Required').matches(onlyLetters, 'Name can only contain letters'),
        email: Yup.string().email('Invalid email format').required('Required').matches(emailRegex, 'Invalid email format'),
        password: Yup.string().min(6, 'Min 6 symbols').required('Required'),
      });
    const handleSubmit = (values, options) => {
        dispatch(registerThunk(values));
        options.resetForm();
    };

    
    return(
        <div className={css.formWrapper}>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                       
                            <Form className={css.contactForm}> 
                            <label  className={css.label}> Name
                            <Field name = 'name' className = {css.input}/>
                            <ErrorMessage className={css.error} component='span' name='name'/>
                            </label>
                            <label className={css.label}> Email
                            <Field  name = 'email' type = 'email' className = {css.input} />
                            <ErrorMessage className={css.error} component='span' name='email'/>
                            </label>
                            <label className={css.label}> Password
                            <Field  name = 'password' type = 'password' className = {css.input} />
                            <ErrorMessage className={css.error} component='span' name='password'/>
                            </label>
                            <button className={css.formBtn} type="submit">Register</button>
        
                           
                        </Form>
                    
                    </Formik>
                </div>
    )
}

export default RegistrationForm;