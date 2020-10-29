import React from "react";
import cx from "classnames";

import Button from "../button";

const PlusButton = ({ className, isFavorite, ...props }) => {
  const plusButtonClassName = cx(`btn--list`, className);
  return (
    <Button className={plusButtonClassName} {...props}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? `#in-list` : `#add`}/>
      </svg>
      <span>My list</span>
    </Button>
  );
};

PlusButton.defaultProps = {
  isFavorite: false
};

PlusButton.propTypes = {

};

export default PlusButton;
