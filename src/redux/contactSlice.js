import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    entities: [],
    filter: '',
    status: null,
    error: null,
  },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.status = 'resolved';
      state.entities = payload;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
    [addContact.pending]: state => {
      state.status = 'addLoading';
      state.error = null;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.status = 'addResolved';
      state.entities.push(payload);
    },
    [addContact.rejected]: (state, { payload }) => {
      state.status = 'addRejected';
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.status = 'deleteLoading';
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.status = 'deleteResolved';
      state.entities = state.entities.filter(item => item.id !== payload.id);
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.status = 'deleteRejected';
      state.error = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { setFilter } = contactsSlice.actions;
