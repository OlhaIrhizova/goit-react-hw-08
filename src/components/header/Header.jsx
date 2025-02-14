import css from "./Header.module.css"
import Navigation from "../navigation/Navigation";


const Header = () => {
    return (
        <header className={css.header}>
            <h2 className={css.headerTitle}>Movie<span className={css.spanTitle}>Finder</span></h2>
          <Navigation/>

        </header>
    )
}

export default Header;