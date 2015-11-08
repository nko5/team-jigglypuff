import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ImmutablePropTypes from 'react-immutable-proptypes';

import UserItems from '../components/UserItems';
import * as UserItemActions from '../actions/UserItemActions';

@connect(
  state => ({
    userItems: state.userItems,
    isLoggedOn: state.auth.get('isLoggedOn'),
    userId: state.auth.get('userId')
  }),
  dispatch => bindActionCreators(UserItemActions, dispatch)
)

export default class UserItemsContainer extends React.Component {
  static propTypes = {
    userItems: ImmutablePropTypes.list.isRequired,
    isLoggedOn: PropTypes.bool.isRequired,
    userId: PropTypes.string.isRequired,
    addItemRequest: PropTypes.func.isRequired
  }

  handleAddItem(item) {
    console.log('handle add item');
    const { name, description } = item;

    this.props.addItemRequest({
      ItemName: name,
      ItemDescription: description,
      UserId: this.props.userId
    });
  }

  render() {
    const { userItems } = this.props;
    return (
      <div className="container">
        <h1>Barter Items</h1>
        <UserItems
          userItems={userItems}
          isLoggedOn={this.props.isLoggedOn}
          handleAddItem={this.handleAddItem.bind(this)} />
      </div>
    );
  }
}
