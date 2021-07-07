import React from "react";

import { connect } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import AuthNav from "../authNav/AuthNav";
import Navigation from "../navigation/Navigation";
import UserMenu from "../UserMenu";
import styles from "./appBar.module.css";

const AppBar = ({ isAuthenticated }) => (
  <nav className={styles.formBox}>
    <h4 className={styles.logo}>Phonebook</h4>

    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
