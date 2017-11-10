import React, { Component } from "react";
import { connect } from "react-redux";
import { setResults } from "../../actions/appActions";

import MovieDB from "../../config";

class Search extends Component {
  state = {
    query: "",
    results: null
  };

  handleChange = event => {
    this.setState({
      query: event.target.value
    });
  };

  search = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${MovieDB.key}&language=en-US&query=${this
        .state.query}&page=1&include_adult=false`
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
      <div style={styles.container}>
        <input
          type="text"
          placeholder="Enter movie title..."
          value={this.state.query}
          onChange={this.handleChange}
          style={styles.search}
        />
        <button onClick={this.search} style={styles.button}>
          Search
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "100%",
    marginBottom: 20
  },
  search: {
    width: "50%",
    height: 20,
    borderColor: "navy",
    borderRadius: 0,
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  button: {
    backgroundColor: "#27ae60",
    border: "none",
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    height: 24,
    color: "white"
  }
};

export default connect(null, { setResults })(Search);
