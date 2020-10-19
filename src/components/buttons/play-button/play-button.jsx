import React from "react";
import cx from "classnames";

import Button from "../button";

const PlayButton = ({ className, ...props }) => {
  const playButtonClassName = cx(`btn--play`, className);
  return (
    <Button className={playButtonClassName} {...props}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Button>
  );
};

PlayButton.propTypes = {
  ...Button.propTypes
};

export default PlayButton;
