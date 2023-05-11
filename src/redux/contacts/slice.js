import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAllContacts, addNewContact, delContact } from './thunks';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const Status = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

const arrThunks = [fetchAllContacts, addNewContact, delContact];

const getActions = type => isAnyOf(...arrThunks.map(item => item[type]));

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

const handleFulfilledGet = (state, action) => {
  state.contacts.items = action.payload;
};

const handleFulfilledAdd = (state, action) => {
  state.contacts.items.push(action.payload);
};

const handleFulfilledDel = (state, action) => {
  state.contacts.items = state.contacts.items.filter(
    contact => contact.id !== action.payload.id
  );
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    const { FULFILLED, PENDING, REJECTED } = Status;
    builder
      .addCase(fetchAllContacts.fulfilled, handleFulfilledGet)
      .addCase(addNewContact.fulfilled, handleFulfilledAdd)
      .addCase(delContact.fulfilled, handleFulfilledDel)
      .addMatcher(isAnyOf(getActions(PENDING)), handlePending)
      .addMatcher(isAnyOf(getActions(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(getActions(FULFILLED)), handleFulfilled);
  },
});

export const { updateFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
