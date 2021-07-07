import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import styles from "./navigation.module.css";

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink to="/" exact className={styles.link}>
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink to="/contacts" exact className={styles.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
