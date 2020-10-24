import fetch from "./fetch-config";

export const api = {
  movies: {
    fetch() {
      return fetch.get(`/films`);
    }
  }
};
