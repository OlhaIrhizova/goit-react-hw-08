import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://67becab7b2320ee050115cff.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkAPI) => {
    try {
        const {data} = await axios.get('/contacts');
        return data;
        
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const addContact = createAsyncThunk('contacts/addContacts', async(body, thunkAPI) => {
    try {
        const {data} = await axios.post('/contacts', body);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

})

export const deleteContact = createAsyncThunk('contacts/deleteContacts', async(id, thunkAPI) => {
    try {
        const {data} =  await axios.delete(`/contacts/${id}`);
        return data.id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})