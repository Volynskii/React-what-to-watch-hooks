import React from "react";
import { bool } from "prop-types";

import cx from "classnames";

const Poster = ({ big }) => {
  return (
    <div  className={cx(`movie-card__poster`, { [`movie-card__poster--big`]: big })}>
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

Poster.propTypes = {
  big: bool
};

export default Poster;
