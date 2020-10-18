import React from "react";
import { string, node } from "prop-types";
import cx from "classnames";

const Button = ({ className, children }) => {
  return (
    <button className={cx(`btn`, className)} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  className: string,
  children: node.isRequired
};

export default Button;
