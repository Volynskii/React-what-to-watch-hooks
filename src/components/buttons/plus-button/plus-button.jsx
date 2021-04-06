import React from "react";
import cx from "classnames";

import Button from "../button";

const PlusButton = ({ className, isAdded, ...props }) => {

  const plusButtonClassName = cx(`btn--list`, className);
  const buttonTextContent = isAdded ? (` Remove from my list`) : (`Add to my list`);
const svgSign = isAdded ? `#in-list` : `#add`;
  return (
    <Button className={plusButtonClassName} {...props}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={svgSign}/>
      </svg>
      <span>{buttonTextContent}</span>
    </Button>
  );
};

PlusButton.defaultProps = {
  isFavorite: false
};

PlusButton.propTypes = {

};

export default PlusButton;
