import React, { Component } from "react";
import { Card, GenreButton } from "../components";
import { connect } from "react-redux";
import { genres, determineGenre, getRandomIndex } from "../utils";
import api from "../config";
import { setResults } from "../actions/appActions";

class Root extends Component {
  state = {
    movie: null
  };

  search = genre => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api.key}&language=en-US&region=US&sort_by=vote_average.desc&vote_count.gte=25&include_adult=false&include_video=false&page=1&with_genres=${genre}`
    )
      .then(res => {
        res.json().then(data => {
          const movie = getRandomIndex(data.results);
          fetch(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${api.key}&language=en-US`
          )
            .then(res => {
              res.json().then(result => this.setState({ movie: result }));
            })
            .catch(err => {
              console.error(err);
            });
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div style={styles.container} className="root">
        <h1>Movie Minder</h1>
        <div style={styles.buttonContainer}>
          {genres.map((genre, i) => {
            return (
              <GenreButton
                genre={genre}
                key={i}
                onClick={() => this.search(determineGenre(genre))}
              />
            );
          })}
        </div>
        <div style={{ marginTop: 20 }}>
          {this.state.movie !== null && <Card data={this.state.movie} />}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: "90%"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};

const mapStateToProps = state => ({
  results: state.results
});

export default connect(mapStateToProps, { setResults })(Root);
