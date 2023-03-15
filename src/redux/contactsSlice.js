import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const initialState = {
  items: [],
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const newContactItem = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };

      state.items.push(newContactItem);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};
export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

export const getContactsItems = state => state.contacts.items;
