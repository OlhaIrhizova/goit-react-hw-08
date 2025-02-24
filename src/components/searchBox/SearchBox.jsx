import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () =>{
    const dispatch = useDispatch();
    
    return(
        <div className={css.searchBox}>
            <label className={css.searchLabel} htmlFor="search">Find contacts by name</label>
            <input className={css.searchInput} type="text" 
            onChange={(evt) => dispatch(changeFilter(evt.target.value))}/>
            
        </div>
    );
}

export default SearchBox;