import {
  addContactSuccess,
  deleteContactSuccess,
  fetchContactSuccess,
} from "./app-actions";
import { createReducer } from "@reduxjs/toolkit";

const ContactsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

export { ContactsReducer };
