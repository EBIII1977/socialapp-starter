import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <div className="Menu">
        <h1>Yowl</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/messagefeed"></Link>
            <Link to="../pages/UserList"></Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu);
