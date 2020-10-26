import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { fetchCommentsAsync } from "../../../store/movie/actions";
import { getFormatDate } from "../../../helpers/getFormatDate";

const getCommentColumns = createSelector(
    (state) => state.movie.comments,
    (comments) => {
      return {
        one: comments.slice(0, 2),
        two: comments.slice(3, 5)
      };
    }
);

const Reviews = () => {
  const movieId = useSelector((state) => state.movie.id);
  const comments = useSelector(getCommentColumns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsAsync(movieId));
  }, []);

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments.one.map((item) => {
          const { dateText, dateTime } = getFormatDate(item.date);
          return (
            <div className="review" key={item.id}>
              <blockquote className="review__quote">
                <p className="review__text">{item.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{item.user.name}</cite>
                  <time className="review__date" dateTime={dateTime}>
                    {dateText}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{item.rating}</div>
            </div>
          );
        })}
      </div>

      {comments.two.length > 0 && (
        <div className="movie-card__reviews-col">
          {comments.two.map((item) => {
            const { dateText, dateTime } = getFormatDate(item.date);
            return (
              <div className="review" key={item.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{item.comment}</p>

                  <footer className="review__details">
                    <cite className="review__author">{item.user.name}</cite>
                    <time className="review__date" dateTime={dateTime}>
                      {dateText}
                    </time>
                  </footer>
                </blockquote>

                <div className="review__rating">{item.rating}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
