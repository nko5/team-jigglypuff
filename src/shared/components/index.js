import React, { PropTypes } from 'react';

export default class MainView extends React.Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div id="main-view">
        <script src="http://cdn.auth0.com/js/lock-7.min.js"></script>
        <h1>Barter</h1>

        <hr />

        {this.props.children}
      </div>
    );
  }
}
