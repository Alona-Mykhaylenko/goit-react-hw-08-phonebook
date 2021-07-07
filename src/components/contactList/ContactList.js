import styles from "./contactList.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/operations";
import React, { Component } from "react";
import { getfilteredContactsSelector } from "../../redux/contacts-selectors";

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <ol className={styles.contactsList}>
        {this.props.filteredContactsProp.map((contact) => (
          <li key={contact.id} className={styles.li}>
            {contact.name}: {contact.number}
            <button
              className={styles.button}
              type="button"
              onClick={() => this.props.deleteContactProp(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    );
  }
}

const mapStateToProps = (state) => ({
  filteredContactsProp: getfilteredContactsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
  deleteContactProp: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  filteredContactsProp: PropTypes.array.isRequired,
  deleteContactProp: PropTypes.func.isRequired,
};
