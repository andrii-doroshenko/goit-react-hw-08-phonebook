import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64b5adb3f3dbab5a95c7953c.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const { data } = await axios.get('/contacts/users');
    console.log('get:', data);
    return data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post('/contacts/users', contact);
    console.log('post:', data);
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/contacts/users/${id}`);
    console.log('delete:', data);
    return id;
  }
);
