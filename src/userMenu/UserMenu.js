import React from "react";
import { connect } from "react-redux";
import { logOut } from "../redux/auth/auth-operations";
import { getUserName } from "../redux/auth/auth-selectors";

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    <img src={avatar} alt="" width="32" />
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  name: getUserName(state),
});

const mapDispatchToProps = {
  onLogout: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
