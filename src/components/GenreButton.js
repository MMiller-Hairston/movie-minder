import React from "react";
import { css } from "aphrodite"
import { genreButtonStyle } from "../styles"

const GenreButton = ({ genre, onClick }) => {
  return (
    <button className={css(genreButtonStyle.container)} onClick={onClick}>
      {genre}
    </button>
  );
};

export default GenreButton;
