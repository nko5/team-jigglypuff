import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import * as AuthActions from '../actions/AuthActions';

@connect(
  state => ({ isLoggedOn: state.auth.get('isLoggedOn') }),
  dispatch => bindActionCreators(AuthActions, dispatch)
)

export default class NavAuth extends React.Component {
  static propTypes = {
    isLoggedOn: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
  }

  renderPage() {
    if (this.props.isLoggedOn) {
      return (
        <a className="navAuthLogout" onClick={this.props.logout}>LogOut</a>
      );
    }
    else {
      return (
        <Link role="button" to={'/'}>LogIn</Link>
      );
    }
  }

  render() {
    return (
      <li>
        {this.renderPage()}
      </li>
    );
  }
}
