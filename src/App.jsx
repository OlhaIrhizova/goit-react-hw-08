


import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Contacts from "./pages/contacts/Contacts";
import Layout from "./Layout";
import { selectIsRefreshing } from "./redux/auth/selectors";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
import { refreshUser } from "./redux/auth/operations";



function App() {
const dispatch = useDispatch();
const isRefreshing = useSelector(selectIsRefreshing);

useEffect(() => {
  dispatch(refreshUser());
}, [dispatch]);

useEffect(() => {
  if (!isRefreshing) {
    dispatch(fetchContacts());
  }
}, [dispatch, isRefreshing]);




  return isRefreshing ?(
   <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element = {<Layout/>}>
      <Route path="/" element = {<Home/>}/>
      <Route path="/register" element = {
        <RestrictedRoute redirectTo="/contacts" element={<Register/>}/>}/>
        <Route path="/login" element = {
        <RestrictedRoute redirectTo="/contacts" element={<Login/>}/>}/>
      <Route path="/contacts" element ={
        <PrivateRoute redirectTo="/login" element={<Contacts/>} />}/>
     
      <Route path="*" element = {<NotFound/>}/>
      </Route>
    </Routes>
    
    

  )

}
export default App;