import {  createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";






const initialState ={
     items: [],
     loading: false,
     error: null
      };


      const slice = createSlice({
        name : 'contacts',
        initialState,
        extraReducers: builder => {
          builder
          .addCase(fetchContacts.fulfilled, (state, action)=>{
            state.items = action.payload;
            state.loading = false;
          })
          .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(deleteContact.fulfilled, (state, action) =>{
            state.items = state.items.filter(item => item.id !== action.payload);
          })
          .addCase(addContact.fulfilled, (state, action)=> {
            state.items.push(action.payload)
             
          })

          

        }
      })

      

      export const contactsReducer = slice.reducer;
    
