import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userName: this.props.user.userName || "",
      userId: this.props.user.userId || "",
      isLoggedOn: this.props.user.isLoggedOn
    };
  }

  static propTypes = {
    user: ImmutablePropTypes.map.isRequired,
    user: ImmutablePropTypes.contains({
      userName: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      isLoggedOn: PropTypes.bool.isRequired
    }),
    handleLogin: PropTypes.func.isRequired
  }

  handleInputChange(e) {
    this.setState({ userName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.userName);
    this.props.handleLogin(this.state.userName);
  }

  renderPage() {
    if (!this.state.isLoggedOn) {
      return (
        <div className="jumbotron">
          <h1>Welcome to Barter</h1>
          <p>Trade your items with others around the world!</p>
          <form className="navbar-form navbar-left" role="search" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                value={this.state.userName}
                onChange={this.handleInputChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-default">Access the Trade</button>
          </form>
        </div>
      );
    }
    else {
      return (
        <div className="jumbotron">
          <h1>Welcome to Barter {this.state.userName}</h1>
          <p>Trade your items with others around the world!</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        {this.renderPage()}
      </div>
    );
  }
}

