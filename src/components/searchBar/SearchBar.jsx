import { useState } from "react";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({onSubmit}) => {
const [value, setValue] = useState('');

const handleSubmit = ((event)=>{
    event.preventDefault();
    if (value.trim() === "") {
        toast.error("Please enter a search query.");
        return;
      }
    onSubmit(value);
    setValue('');
})

return(
    
    <form onSubmit={handleSubmit} className={css.form}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search movies"
      value={value}
      onChange={(e) => setValue(e.target.value)}
     className={css.formImput}
    />
    <button type="submit" className={css.searchBtn}>Search</button>
    </form>
  

    )
     }
     
     export default SearchBar;      