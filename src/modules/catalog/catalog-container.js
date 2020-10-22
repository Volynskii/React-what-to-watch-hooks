import { connect } from "react-redux";

import Catalog from "./catalog";
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
)(Catalog);
