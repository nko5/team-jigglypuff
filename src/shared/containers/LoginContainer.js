import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import Login from '../components/Login';
import * as AuthActions from '../actions/AuthActions';

@connect(
  state => ({ user: state.auth }),
  dispatch => bindActionCreators(AuthActions, dispatch)
)

export default class LoginContainer extends React.Component {
  static propTypes = {
    user: ImmutablePropTypes.map.isRequired,
    user: ImmutablePropTypes.contains({
      userName: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      isLoggedOn: PropTypes.bool.isRequired
    }),
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
  }

  handleLogin(userName) {
    this.props.login(userName);
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Login user={user} handleLogin={this.handleLogin.bind(this)} />
      </div>
    );
  }
}
