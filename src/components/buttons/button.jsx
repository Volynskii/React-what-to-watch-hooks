import React from "react";
import { string, node, func } from "prop-types";
import cx from "classnames";

const Button = ({ className, children, onClick }) => {
  return (
    <button className={cx(`btn`, className)} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: string,
  children: node.isRequired,
  onClick: func
};

export default Button;
