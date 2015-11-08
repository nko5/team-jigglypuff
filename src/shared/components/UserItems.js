import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Link } from 'react-router';

import AddItem from './AddItem';

export default class UserItems extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    userItems: ImmutablePropTypes.list.isRequired,
    isLoggedOn: PropTypes.bool.isRequired,
    handleAddItem: PropTypes.func.isRequired
  }

  renderPage() {
    if (this.props.isLoggedOn) {
      return (
        <div>
          <AddItem handleAddItem={this.props.handleAddItem} />
        </div>
      );
    }
    else {
      return (
        <div className="jumbotron">
          <h1>Not Logged On</h1>
          <p>Please Sign In to see this page</p>
          <Link className="btn btn-primary btn-lg" role="button" to={'/'}>Go To Logon</Link>
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

