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
      id: movie.id,
      name: movie.name,
      posterImage: movie.poster_image,
      previewImage: movie.preview_image,
      backgroundImage: movie.background_image,
      backgroundColor: movie.background_color,
      genreId: GenresMap[movie.genre],
      genre: movie.genre,
      scores: movie.scores_count,
      description: movie.description,
      rating: movie.rating,
      director: movie.director,
      starring: movie.starring,
      runTime: movie.run_time,
      released: movie.released,
      isFavorite: movie.isFavorite,
      trailer: movie.video_link,
      previewVideo: movie.preview_video_link,
      poster: movie.poster
    };
  });
};
