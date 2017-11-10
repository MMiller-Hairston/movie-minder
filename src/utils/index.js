export const genres = [
  "Adventure",
  "Fanstasy",
  "Animation",
  "Drama",
  "Horror",
  "Action",
  "Comedy",
  "History",
  "Western",
  "Thriller",
  "Crime",
  "Documentary",
  "Sci-Fi",
  "Mystery",
  "Romance",
  "Family",
  "War"
];

export const determineGenre = genre => {
  switch (genre) {
    case "Adventure":
      return 12;
    case "Fantasy":
      return 14;
    case "Animation":
      return 16;
    case "Drama":
      return 18;
    case "Horror":
      return 27;
    case "Action":
      return 28;
    case "Comedy":
      return 35;
    case "History":
      return 36;
    case "Western":
      return 37;
    case "Thriller":
      return 53;
    case "Crime":
      return 80;
    case "Documentary":
      return 99;
    case "Sci-Fi":
      return 878;
    case "Mystery":
      return 9648;
    case "Romance":
      return 10749;
    case "Family":
      return 10751;
    case "War":
    default:
      return 10752;
  }
};