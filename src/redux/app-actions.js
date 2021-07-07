import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");

const fetchContactRequest = createAction("contacts/fetchContactRequest");
const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
const fetchContactError = createAction("contacts/fetchContactError");

const handleChange = createAction("app/handleChange");

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  handleChange,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
};
