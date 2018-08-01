import Footer from "./Footer.jsx";
import NavBar from "./NavBar.jsx";
import React from "react";
import AuthorizingRoute from "./AuthorizingRoute.jsx";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./Login.jsx";
import UserManagement from "./UserManagement.jsx";
import Home from "./Home.jsx";

const AppRoot = class AppRoot extends React.Component {
  constructor(props) {
    super(props);
    //Register for Authentication state changes
    this.props.authService.onAuthChange(() => {
      this.setState({
        pendingUserCreation:
          this.props.authService.isAuthenticated() &&
          !!this.props.authService.getPayload().pendingUserCreation,
        isAuthenticated:
          this.props.authService.isAuthenticated() &&
          !this.props.authService.getPayload().pendingUserCreation
      });
    });
    this.state = {
      pendingUserCreation:
        this.props.authService.isAuthenticated() &&
        !!this.props.authService.getPayload().pendingUserCreation,
      isAuthenticated:
        this.props.authService.isAuthenticated() &&
        !this.props.authService.getPayload().pendingUserCreation
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <NavBar
          authService={this.props.authService}
          isAuthenticated={this.state.isAuthenticated}
          location={this.props.location}
        />
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            path="/login"
            render={routeProps => (
              <Login
                isAuthenticated={this.state.isAuthenticated}
                authService={this.props.authService}
                {...routeProps}
              />
            )}
          />
          <AuthorizingRoute
            path="/userMgmnt"
            authService={this.props.authService}
            component={UserManagement}
          />
          <Redirect from="*" to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
};

export default AppRoot;
