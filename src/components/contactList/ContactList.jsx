import { useSelector } from "react-redux";
import Contact from "../contact/Contact"

const ContactList = () =>{
    const contacts = useSelector(state => state.contacts.items);
    const filters = useSelector(state => state.filters.name);

    const filterData = contacts.filter(item => item.name.toLowerCase().includes(filters.toLowerCase()))
return(
    <div>
        <ul>
            {filterData.map(item =>(
                <Contact key = {item.id} {...item} />
            ))}
        </ul>
    </div>
);
}
export default ContactList;