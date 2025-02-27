
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import ContactForm from "./components/contactForm/ContactForm";
import css from "./App.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";


function App() {
const dispatch = useDispatch();

useEffect(() => {
 dispatch(fetchContacts())
},[dispatch])



  return(
    <div className={css.container}>
    <h1>Phonebook</h1>
    <ContactForm />
    <SearchBox />
    <ContactList />
    
    </div>
  )

}
export default App;