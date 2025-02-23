
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import ContactForm from "./components/contactForm/ContactForm";
import css from "./App.module.css";


function App() {




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