import { StyleSheet } from "aphrodite";

export default StyleSheet.create({
  container: {
    margin: 5,
    width: 100,
    height: 50,
    color: "#01d277",
    backgroundColor: "#081c24",
    borderRadius: 3,
    border: "none",
    transition: "0.25s ease",
    ":hover": {
      backgroundColor: "#01d277",
      color: "#081c24",
      transform: "scale(1.1)"
    }
  }
});
