import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import Navigation from "../navigation/Navigation";
import css from "./AppBar.module.css"


const AppBar = () => {
    const user = useSelector(selectUser);
   
    return (
       
        <header className={css.header}>
            {user.name && <h2 className={css.welcomeTitle}>Welcome, {user.name}</h2>}
             <h1 className={css.headerTitle}>Phonebook</h1>
             

         <Navigation/>

        </header>
    )
}

export default AppBar;