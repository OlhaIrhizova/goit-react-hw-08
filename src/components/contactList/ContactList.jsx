import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import { selectFilteredContacts } from "../../redux/contactsSlice";



const ContactList = () =>{
    const contacts = useSelector(selectFilteredContacts);
    
    
return(
    <div>
        <ul>
            {contacts.map(item =>(
                <Contact key = {item.id} {...item} />
            ))}
        </ul>
    </div>
);
}
export default ContactList;