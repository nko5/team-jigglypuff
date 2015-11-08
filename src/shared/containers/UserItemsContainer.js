import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import UserItems from '../components/UserItems';
import * as UserItemActions from '../actions/UserItemActions';

@connect(
  state => ({ userItems: state.userItems, isLoggedOn: state.auth.get('isLoggedOn') }),
  dispatch => bindActionCreators(UserItemActions, dispatch)
)

export default class UserItemsContainer extends React.Component {
  static propTypes = {
    userItems: ImmutablePropTypes.list.isRequired,
    isLoggedOn: PropTypes.bool.isRequired,
    addItemClient: PropTypes.func.isRequired
  }

  handleAddItem(item) {
    this.props.addItemClient(item);
  }

  render() {
    const { userItems } = this.props;
    return (
      <div>
        <UserItems
          userItems={userItems}
          isLoggedOn={this.props.isLoggedOn}
          handleAddItem={this.handleAddItem.bind(this)} />
      </div>
    );
  }
}
