import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css"
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({id, name, number,}) =>{
const dispatch = useDispatch()

    return(
        
            <li className = {css.contactItem}>
                <div className={css.contactInfo}>
                <span><FaUser/>{name}</span>
                <span><FaPhone  />{number}</span>
                </div>
                
                <button className={css.deleteBtn} onClick={()=> dispatch(deleteContact(id))}>Delete</button>
            </li>
    
    );
}
export default Contact;
