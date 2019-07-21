import React, { Component } from "react";
import "../home.css";
import { Link } from "react-router-dom";
import classnames from "classnames";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = 0 >= currentScrollPos;

    this.setState({
      visible
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div>
        <ul
          className={classnames("navbar", {
            navbar_down: !this.state.visible
          })}
        >
          <li>
            <Link to={"/"}>*</Link>
          </li>
          <li>
            <input type="text" placeholder="Working on this..." name="search" />
          </li>
          <Link to={"/movies"}>Lista Film</Link>
          <li>Mangusta D'oro</li>
          <li>Login</li>
          <li>Registrati</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
