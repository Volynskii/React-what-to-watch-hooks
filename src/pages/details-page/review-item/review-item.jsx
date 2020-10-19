import React from "react";
import { string, instanceOf } from "prop-types";
import cx from "classnames";

const ReviewItem = ({ className, text, author, date, rating }) => {
  const dateText = date;
  const dateTime = date;

  return (
    <div className={cx(`review`, className)}>
      <blockquote className="review__quote">
        <p className="review__text">{text}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime={dateTime}>
            {dateText}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

ReviewItem.propTypes = {
  className: string,
  text: string.isRequired,
  author: string.isRequired,
  date: instanceOf(Date).isRequired,
  rating: string.isRequired
};

export default ReviewItem;
