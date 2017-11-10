import React from "react";

const GenreButton = ({ genre, onClick }) => {
  return (
    <button style={styles.genreButton} onClick={onClick}>
      {genre}
    </button>
  );
};

const styles = {
  genreButton: {
    margin: 5,
    width: 100,
    height: 50,
    color: "#01d277",
    backgroundColor: "#081c24",
    borderRadius: 3,
    border: "none"
  }
};

export default GenreButton;
