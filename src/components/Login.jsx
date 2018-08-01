import { Link, Redirect } from "react-router-dom";
import React from "react";

const Login = class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />;
    } else if (this.props.pendingUserCreation) {
      return <Redirect to="/tos" />;
    }
    return (
      <div className="container">
        <div className="center-form panel">
          <div className="panel-body">
            <h2 className="text-center">Log in </h2>
            <h6 className="text-center">
              react-bp has a mock backend which is hard coded to log you in as
              &apos;John Doe&apos;{" "}
            </h6>
            <div className="form-group has-feedback">
              <input
                type="text"
                className="form-control input-lg"
                placeholder="Email"
              />
              <i className="fa form-control-feedback fa-at"> </i>
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control input-lg"
                placeholder="Password"
              />
              <i className="fa form-control-feedback fa-key"> </i>
            </div>
            <button
              className="btn btn-lg btn-block btn-success"
              onClick={() => this.props.authService.login("google")}>
              Log in
            </button>
            <br />
            <p className="text-center text-muted">
              <small>Don&apos;t have an account yet? </small>
              <Link to="signup">Sign up </Link>
            </p>
            <div className="signup-or-separator">
              <h6 className="text">or </h6>
              <hr />
            </div>

            <button
              className="btn btn-block btn-google-plus"
              onClick={() => this.props.authService.authenticate("google")}>
              <i className="fa fa-google-plus"> </i>
              sign in with Google
            </button>
          </div>
        </div>
      </div>
    );
  }
};
export default Login;
