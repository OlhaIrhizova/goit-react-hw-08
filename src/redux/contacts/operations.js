import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../auth/operations";


export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const {data} = await api.get('/contacts');
        return data;
        
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const addContact = createAsyncThunk('contacts/addContacts', async(body, thunkAPI) => {
    try {
        const {data} = await api.post('/contacts', body);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

})

export const deleteContact = createAsyncThunk('contacts/deleteContacts', async(id, thunkAPI) => {
    try {
        const {data} =  await api.delete(`/contacts/${id}`);
         return data.id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})