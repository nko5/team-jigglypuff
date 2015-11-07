import React from 'react';

export default React.createClass({
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
