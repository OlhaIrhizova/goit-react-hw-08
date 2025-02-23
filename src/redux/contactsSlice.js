import { createSlice } from "@reduxjs/toolkit";
import initialContacts from "../contacts.json";


const initialState ={
    contacts: {
          items: initialContacts,
      }};


      const slice = createSlice({
        name : 'contacts',
        initialState,
        reducers:{
          addContact: (state, action) => {
            state.contacts.items.push(action.payload);
          },
          deleteContact: (state, action) =>{
            state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload);
          }
        }
      })

      export const contactsReducer = slice.reducer;
      export const {addContact, deleteContact} = slice.actions;
