import React, { Component } from "react";
import { ItemTypes } from "../constants";

// adult:false
// backdrop_path:"/6fDqNg8g7NJXUmsF1Dm4Y3iTAZW.jpg"
// belongs_to_collection:null
// budget:3180000
// genres:[{id: 18, name: "Drama"}, {id: 10751, name: "Family"}, {id: 14, name: "Fantasy"}]
// homepage:""
// id:1585
// imdb_id:"tt0038650"
// original_language:"en"
// original_title:"It's a Wonderful Life"
// overview:"George Bailey has spent his entire life giving of himself to the people of Bedford Falls. He has always longed to travel but never had the opportunity in order to prevent rich skinflint Mr. Potter from taking over the entire town. All that prevents him from doing so is George's modest building and loan company, which was founded by his generous father. But on Christmas Eve, George's Uncle Billy loses the business's $8,000 while intending to deposit it in the bank. Potter finds the misplaced money, hides it from Billy, and George's troubles begin."
// poster_path:"/qZJ6d1SDsfoztmBfStwkBeTaOwG.jpg"
// production_companies:[{name: "RKO Radio Pictures", id: 6}, {name: "Liberty Films (II)", id: 11770}]
// production_countries:[{iso_3166_1: "US", name: "United States of America"}]
// release_date:"1946-12-20"
// revenue:9644124
// runtime:130
// spoken_languages:[{iso_639_1: "en", name: "English"}]
// status:"Released"
// tagline:"It's a wonderful laugh! It's a wonderful love!"
// title:"It's a Wonderful Life"
// video:false
// vote_average:8
// vote_count:1143

class Card extends Component {
  render() {
    return (
      <div
        style={{
          ...styles.container,
          backgroundImage: `url("https://image.tmdb.org/t/p/w1280${this.props
            .data.backdrop_path}")`,
          backgroundSize: "cover",
          // backgroundRepeat: "no-repeat"
        }}
      >
        <div style={styles.movieInfo}>
          <div style={styles.imageContainer}>
            <img
              src={
                "https://image.tmdb.org/t/p/w185" + this.props.data.poster_path
              }
            />
          </div>
          <div style={styles.infoContainer}>
            <h2 style={styles.title}>{this.props.data.title}</h2>
            <p style={styles.release}>
              Released: {this.props.data.release_date}
            </p>
            <p style={styles.description}>{this.props.data.overview}</p>
            <p>Voted {this.props.data.vote_average} / 10 by {this.props.data.vote_count} users.</p>
            <p>{this.props.data.runtime} minutes.</p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    // maxWidth: "65%",
    // marginLeft: "auto",
    // marginRight: "auto",
    // textAlign: "left",
    // marginTop: 120
  },
  movieInfo: {
    // backgroundColor: "rgba(0, 0, 0, .60)",
    // maxWidth: "90%",
    // position: "relative",
    // marginLeft: "auto",
    // marginRight: "auto",
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    // padding: 10,
    // color: "white",
    // alignSelf: "center"
  },
  imageContainer: {
    // marginBottom: 0,
    // paddingBottom: 0
  },
  infoContainer: {
    // marginTop: 5,
    // marginLeft: 10
  },
  title: {
    // marginBottom: 0,
    // fontVariant: "small-caps"
  },
  release: {
    // fontSize: 8,
    // marginTop: 2,
    // fontStyle: "italic"
  },
  description: {
    // marginRight: 10
  }
};

export default Card;
