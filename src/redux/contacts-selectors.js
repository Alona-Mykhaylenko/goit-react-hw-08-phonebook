import { createSelector } from "@reduxjs/toolkit";

const getContactsSelector = (state) => state.contacts;

const getFilterSelector = (state) => state.filter;

const getfilteredContactsSelector = createSelector(
  [getFilterSelector, getContactsSelector],
  (filter, contacts) => {
    const filterInput = filter.toLowerCase().trim();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterInput)
    );
  }
);

export { getContactsSelector, getFilterSelector, getfilteredContactsSelector };
