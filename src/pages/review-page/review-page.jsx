import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import cx from "classnames";
import Popup from "../../components/popup/popup";
import Loading from "../../components/loading/loading";
import {
  createReviewAsync,
  fetchMovieAsync,
  resetMovie,
  emitMovieError
} from "../../store/movie/actions";
import { delay } from "../../helpers/delay";

const ReviewPage = () => {
  const [comment, setComment] = useState(``);
  const [rating, setRating] = useState(0);
  const [isSending, setSending] = useState(false);
  const [isSended, setSended] = useState(false);

  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();
  const id = match.params.id;
  const isPostDisabled = !comment || !rating || isSending;

  useEffect(() => {
    dispatch(fetchMovieAsync(id));
    return () => dispatch(resetMovie());
  }, []);

  useEffect(() => {
    if (isSending && !movie.error) {
      history.push(`/movies/${id}`);
    }
  }, [isSended]);

  const onConfirmPopup = () => {
    dispatch(emitMovieError(null));
    setSending(false);
    setSended(false);
  };

  const handleSubmit = async (evt) => {
    const review = { rating, comment };
    evt.preventDefault();
    setSending(true);
    await delay(2000);
    dispatch(createReviewAsync(id, review));
    setSended(true);
  };

  if (!movie.id) {
    return <Loading />;
  }

  return (
    <>
      {movie.movieError && (
        <Popup title="Create review error" onConfirm={onConfirmPopup}>
          {movie.movieError}
        </Popup>
      )}
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={movie.backgroundImage} alt={movie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/movies/${id}`} className="breadcrumbs__link">
                    {movie.name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img
              src={movie.posterImage}
              alt={`${movie.name} poster`}
              width="218"
              height="327"
            />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={handleSubmit}>
            <div className="rating">
              <div className="rating__stars">
                {[1, 2, 3, 4, 5].map((item) => {
                  return (
                    <Fragment key={item}>
                      <input
                        className="rating__input"
                        id={`star-${item}`}
                        type="radio"
                        name="rating"
                        value={item}
                        checked={item === rating}
                        onChange={() => setRating(item)}
                      />
                      <label
                        className={cx(`rating__label`, {
                          [`rating__label_default`]: !rating
                        })}
                        htmlFor={`star-${item}`}
                      >
                        {`Rating ${item}`}
                      </label>
                    </Fragment>
                  );
                })}
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                onChange={(evt) => setComment(evt.target.value)}
              />
              <div className="add-review__submit">
                <button
                  className="add-review__btn"
                  type="submit"
                  disabled={isPostDisabled}
                >
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default ReviewPage;
