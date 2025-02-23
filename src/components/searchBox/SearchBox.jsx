import css from "./SearchBox.module.css";

const SearchBox = ({inputValue, onFilter}) =>{
    
    return(
        <div className={css.searchBox}>
            <label className={css.searchLabel} htmlFor="search">Find contacts by name</label>
            <input className={css.searchInput} type="text" value={inputValue} 
            onChange={(evt) => onFilter(evt.target.value)}/>
            <p>{inputValue}</p>
        </div>
    );
}

export default SearchBox;