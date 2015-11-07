import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/AuthActions';
import { connect } from 'react-redux';

export default (ComposedComponent) => {
  return (
    @connect(state => ({ auth: state.auth }))

    class AuthenticatedComponent extends React.Component {
      static propTypes = {
        auth: PropTypes.any.isRequired
      }

      static onEnter(nextState, replaceState) {
        console.log('willtransition');
        if (auth.get('isLoggedIn')) {
          replaceState({ nextPathname: nextState.location.pathname }, './login')
        }
      }

      render() {
        return (
          <ComposedComponent
            {...this.props} />
        );
      }
    });
};
