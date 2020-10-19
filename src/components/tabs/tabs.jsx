import React, { useState } from "react";
import { arrayOf, shape, string, node } from "prop-types";
import cx from "classnames";

import { capitalize } from "../../helpers/capitalize";

const Tabs = ({ items }) => {
  const [current, setCurrent] = useState(items[0] || {});

  const handleTabClick = (evt, tab) => {
    evt.preventDefault();
    setCurrent(tab);
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {items.map((item, index) => (
            <li
              key={index}
              className={cx(`movie-nav__item`, {
                [`movie-nav__item--active`]: current.name === item.name
              })}
            >
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => handleTabClick(evt, item)}
              >
                {capitalize(item.name)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {current.content}
    </div>
  );
};

Tabs.propTypes = {
  items: arrayOf(
    shape({
      name: string.isRequired,
      content: node.isRequired
    })
  ).isRequired
};

export default Tabs;
