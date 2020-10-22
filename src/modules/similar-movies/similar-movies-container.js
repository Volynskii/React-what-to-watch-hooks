import { connect } from "react-redux";

import SimilarMovies from "./similar-movies";
import { fetchMoviesAsync } from "../../store/movies/actions";

const mapStateToProps = (state) => {
  return {
    movies: state.movies.list
  };
};

const mapDispatchToProps = {
  fetchMoviesAsync
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SimilarMovies);
