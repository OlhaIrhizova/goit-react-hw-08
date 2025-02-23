import { useSelector } from "react-redux";
import Contact from "../contact/Contact"

const ContactList = () =>{
    const contacts = useSelector(state => state.contacts.item || [])
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