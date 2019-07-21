import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../card.css";

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  render() {
    const bgcolor = this.props.adviceable
      ? "rgba(	131, 92, 56, 0.8)"
      : "rgba(		46, 42, 36, 0.8)";
    return (
      <div
        onMouseOver={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        className="card_container"
      >
        <img
          className="card-img"
          src={this.props.imageUrl}
          alt={this.props.title}
        />
        {this.state.hover && (
          <Link
            to={"/movies/" + this.props._id}
            className="card_infos"
            style={{ backgroundColor: bgcolor }}
          >
            <h2 id="card_movieTitle">{this.props.title}</h2>
            <h3 id="card_movieTitle">Voto: {this.props.vote}</h3>
          </Link>
        )}
      </div>
    );
  }
}

export default MovieCard;
