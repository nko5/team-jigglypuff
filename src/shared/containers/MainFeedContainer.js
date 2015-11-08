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

export default class MainFeedContainer extends React.Component {
  render() {
    return (
      <div>
        Main Feed
      </div>
    );
  }
}
