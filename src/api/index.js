import fetch from "./fetch-config";

export const api = {
  movies: {
    fetch() {
      return fetch.get(`/films`);
    }
  },
  auth: {
    login(credentials) {
      return fetch.post(`/login`, credentials);
    }
  }
};
