import React from "react";
import cx from "classnames";

const Poster = ({big}) => {
  return (
    <div style={{border: "1px solid red"}} className={cx(`movie-card__poster`, { [`movie-card__poster--big`]: big })}>
      <img
        src="img/the-grand-budapest-hotel-poster.jpg"
        alt="The Grand Budapest Hotel poster"
        width="218"
        height="327"
      />
    </div>
  );
};

Poster.defaultProps = {
  big: false
};

export default Poster;
