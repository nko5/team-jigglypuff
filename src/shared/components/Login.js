import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/AuthActions';
import { connect } from 'react-redux';

const Login = React.createClass({
  propTypes: {
    auth: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  },

  componentDidMount() {
    this.lock = new Auth0Lock('DEn8EdLDpWRgzCBu8XWdhd7CF9BSTkhu', 'jsfeb26.auth0.com');
  },

  showLock() {
    this.lock.show();
  },

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Welcome to Barter</h1>
          <p>Trade your items with others around the world!</p>
          <p><a className="btn btn-primary btn-lg" onClick={this.showLock} role="button">Access the Trade</a></p>
        </div>
      </div>
    );
  }
});

export default connect(state => ({auth: state.auth}))(Login);
