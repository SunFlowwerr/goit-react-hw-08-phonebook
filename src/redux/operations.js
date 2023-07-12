import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await api.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (text, { rejectWithValue }) => {
    try {
      const contact = await api.addContact(text);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await api.deleteContact(id);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
