import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";



const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  
  
  
  const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
   

      return (
          <nav className={css.nav}>
          <NavLink className = {buildLinkClass}to='/'> Home</NavLink>
       
          
         {isLoggedIn && (
          
           <NavLink className = {buildLinkClass}to='/contacts'> Contacts</NavLink>
         )}
           {!isLoggedIn ? (
            <>
           <NavLink className = {buildLinkClass}to='/register'> Register</NavLink>
           <NavLink className = {buildLinkClass}to='/login'> Login</NavLink>
           </> ) : (
          <button className={css.button} onClick={() => dispatch(logoutThunk())}>Logout</button>
           )}
        </nav>
      );
  };
  export default Navigation;