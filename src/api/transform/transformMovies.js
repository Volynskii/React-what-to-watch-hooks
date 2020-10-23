export const GenresMap = {
  "All": 0,
  "Comedy": 1,
  "Crime": 2,
  "Documentary": 3,
  "Drama": 4,
  "Horror": 5,
  "Family": 6,
  "Romance": 7,
  "SciFi": 8,
  "Thriller": 9
};

export const transformMovies = (movies) => {
  return movies.map((movie) => {
    return {
      ...movie,
      genreId: GenresMap[movie.genre]
    };
  });
};
