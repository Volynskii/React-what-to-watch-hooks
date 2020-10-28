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
    },
    check() {
      return fetch.get(`/login`);
    }
  },
  comments: {
    fetch(id) {
      return fetch.get(`/comments/${id}`);
    },
    create(id, review) {
      return fetch.post(`/comments/${id}`, review);
    }
  },
  promo: {
    fetch() {
      return fetch.get(`/films/promo`);
    }
  }
};
