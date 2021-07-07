import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import HomeView from "./views/HomeView";
// import RegisterView from "./views/RegisterView";
// import LoginView from "./views/LoginView";
// import ContactsView from "./views/ContactsView";
import AppBar from "./userMenu/appBar/AppBar";
import { connect } from "react-redux";
import { getCurrentUser } from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/registerView/RegisterView"));
const LoginView = lazy(() => import("./views/loginView/LoginView"));
const ContactsView = lazy(() => import("./views/contactsView/ContactsView"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  state = {};
  render() {
    return (
      <Router>
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />

            <PrivateRoute
              path="/contacts"
              component={ContactsView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
