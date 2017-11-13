import React, { Component } from "react";
import { css } from "aphrodite";
import { ItemTypes } from "../constants";
import { cardStyle } from "../styles";

class Card extends Component {
  render() {
    return (
      <div
        className={css(cardStyle.container)}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w1280${this.props
            .data.backdrop_path}")`,
          backgroundSize: "cover"
        }}
      >
        <div className={css(cardStyle.movie)}>
          <div className={css(cardStyle.poster)}>
            <img
              src={
                "https://image.tmdb.org/t/p/w185" + this.props.data.poster_path
              }
            />
          </div>
          <div className={css(cardStyle.smallText)}>
            <h1 className={css(cardStyle.title)}>{this.props.data.title}</h1>
            <h4>{this.props.data.tagline}</h4>
            <p>Released: {this.props.data.release_date}</p>
            <p>
              Voted {this.props.data.vote_average} / 10 by{" "}
              {this.props.data.vote_count} users.
            </p>
            <p>{this.props.data.runtime} minutes.</p>
          </div>
          <div className={css(cardStyle.overview)}>
            <p>{this.props.data.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
