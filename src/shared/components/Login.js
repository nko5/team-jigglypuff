import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router';

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      userName: ""
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

    if (this.state.userName.length > 0) {
      this.props.handleLogin(this.state.userName);
      this.setState({ userName: "" });
    }
    else {
      alert("Please enter a User Name");
    }
  }

  renderPage() {
    if (!this.props.user.get('isLoggedOn')) {
      return (
        <div className="jumbotron">
          <h1>Welcome to Barter</h1>
          <p>Trade your items with others around the world!</p>
          <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
                value={this.state.userName}
                onChange={this.handleInputChange.bind(this)} />
            </div>
            <button type="submit" className="btn btn-primary signin">Sign in</button>
          </form>
        </div>
      );
    }
    else {
      return (
        <div className="jumbotron">
          <h1>Welcome to Barter {this.props.user.get('userName')}</h1>
          <p>Trade your items with others around the world!</p>
          <Link className="btn btn-primary btn-lg" role="button" to={'/feed'}>Enter</Link>
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

