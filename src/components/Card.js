import React, { Component } from "react";
import { ItemTypes } from "../constants";

class Card extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src={
              "https://image.tmdb.org/t/p/w1280" + this.props.data.poster_path
            }
            style={{ height: 150 }}
          />
        </div>
        <div style={styles.infoContainer}>
          <h4 style={styles.title}>{this.props.data.title}</h4>
          <p style={styles.release}>Released: {this.props.data.release_date}</p>
          <p style={styles.description}>{this.props.data.overview}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0,
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    textAlign: "left"
  },
  imageContainer: {
    marginBottom: 0,
    paddingBottom: 0
  },
  infoContainer: {
    marginTop: 5,
    marginLeft: 10
  },
  title: {
    marginBottom: 0,
    fontVariant: "small-caps"
  },
  release: {
    fontSize: 8,
    marginTop: 2,
    fontStyle: "italic"
  },
  description: {
    marginRight: 10
  }
};

export default Card;
