import { Link, Redirect } from "react-router-dom";
import React from "react";

const TOS = class TOS extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tosChecked: false };
    // This line is important!
    this.tosCheckClicked = this.tosCheckClicked.bind(this);
  }

  tosCheckClicked() {
    this.setState({
      tosChecked: !this.state.tosChecked
    });
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <div className="center-form panel">
          <div className="panel-body">
            <h2 className="text-center">Terms of Service </h2>
            <h6 className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis dictum libero in efficitur. Ut mattis pharetra sem, id ornare metus iaculis sit amet. Pellentesque et mi a diam viverra varius nec ac magna. In dapibus odio non venenatis blandit. Aenean lacinia vulputate nunc, eget vestibulum justo mattis id. Aliquam eu arcu ut sem varius tristique id sed felis. Curabitur sed libero id nulla cursus volutpat eu eu nulla. Morbi pulvinar, mauris quis mattis porta, metus leo luctus nulla, luctus blandit eros lorem non enim. Duis tristique ornare mi in rhoncus. Praesent non justo varius dolor placerat tincidunt aliquam sit amet ligula. Cras at nulla finibus, mattis dolor non, condimentum orci. Sed blandit tristique pretium. Suspendisse sit amet nunc vestibulum, condimentum lectus a, auctor urna.
            </h6>
            <h3 className="text-center" onClick={this.tosCheckClicked} >
                  Accept:
                 <i
                  className={
                this.state.tosChecked
                    ? "fa fa-check-square-o"
                    : "fa fa-square-o"
                  }
                  />
            </h3>
            
            <button
              className={
                this.state.tosChecked
                  ? "btn btn-lg btn-block btn-success"
                  : "btn btn-lg btn-block btn-success disabled"
              }
              onClick={() => this.props.authService.login("google")}>
              Create User
            </button>
          </div>
        </div>
      </div>
    );
  }
};
export default TOS;
