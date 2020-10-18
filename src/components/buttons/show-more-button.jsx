import React from "react";
import cx from "classnames";

import Button from "./button";

const ShowMoreButton = ({ className, ...props }) => {
  const showButtonClassName = cx(`catalog__button`, className);
  return (
    <Button className={showButtonClassName} {...props}>
      Show more
    </Button>
  );
};

ShowMoreButton.propTypes = {
  ...Button.propTypes
};

export default ShowMoreButton;
