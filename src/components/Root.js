import React, { Component } from "react";
import { Card, GenreButton } from "../components";
import { connect } from "react-redux";
import { genres, determineGenre } from "../../utils";
import api from "../../config";
import { setResults } from "../../actions/appActions";

class Root extends Component {
  search = genre => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}`
    )
      .then(res => {
        res.json().then(data => this.props.setResults(data.results));
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
        <div>
        {this.props.results.map((movie) => {
          return <Card data={movie} key={movie.id} />;
        })}
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
