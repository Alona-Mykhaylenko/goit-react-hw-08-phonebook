import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./authNav.module.css";

const AuthNav = () => (
  <nav>
    <NavLink to="/register" exact className={styles.link}>
      Registration
    </NavLink>

    <NavLink to="/login" exact className={styles.link}>
      Login
    </NavLink>
  </nav>
);

export default AuthNav;
