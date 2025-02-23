import { ErrorMessage, Field, Form, Formik } from "formik"
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";


const ContactForm = () => {
    const dispatch = useDispatch();
  
    const initialValues ={
        name :'',
        number: '',
    };

    const onlyLetters = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄ'-\s]+$/;
    const phonereg = /^(\(\d{3}\)-|\d{3}-)\d{3}-\d{3}$/;
    const applySchema = Yup.object().shape({
        name: Yup.string().required('Required').min(3, 'Too short')
        .max(50, 'Too Long').matches(onlyLetters, 'Name can only contain letters'),
        number: Yup.string().required('Required').min(3, 'Too short').max(50, 'Too Long')
        .matches(phonereg, 'Invalid phone number format'),
    });

    

    const handleSubmit = (values,actions) => {
       
        const newObj = {
            id:nanoid(),
            name: values.name,
            number: values.number
        };
        dispatch(addContact(newObj))
        actions.resetForm();
       
    };


    return (
        <div className={css.formWrapper}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={applySchema}>
                {() => (
                    <Form className={css.contactForm}> 
                    <label htmlFor="name" className={css.label}> Name
                    <Field name = 'name' className = {css.input}/>
                    <ErrorMessage className={css.error} component='span' name='name'/>
                    </label>
                    <label htmlFor="number"className={css.label}> Number
                    <Field  name = 'number' type = 'text' className = {css.input}/>
                    <ErrorMessage className={css.error} component='span' name='number'/>
                    </label>
                    <button className={css.formBtn} type="submit">Add contact</button>

                   
                </Form>
                )}
            </Formik>
        </div>
    )

}
export default ContactForm;