import ContactForm from "../../components/contactForm/ContactForm";
import ContactList from "../../components/contactList/ContactList";
import SearchBox from "../../components/searchBox/SearchBox";
import css from "./Contacts.module.css";

const Contacts = () => {
    return (
    <div className={css.container}>
<ContactForm/>
<SearchBox/>
<ContactList/>
    </div>
    )
}

export default Contacts;