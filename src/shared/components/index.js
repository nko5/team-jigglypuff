import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default class MainView extends React.Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div id="main-view">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to={'/'}>Barter</Link>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="about.html">Feed</a>
                        </li>
                        <li>
                            <a href="services.html">Services</a>
                        </li>
                        <li>
                            <a href="contact.html">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {this.props.children}
      </div>
    );
  }
}
