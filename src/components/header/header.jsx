import React from "react";
import cx from "classnames";

const Header = ({ className, pageTitle }) => {
  return (
    <header className={cx(`page-header movie-card__head`, className)}>
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        {pageTitle ? (
          <h1 className="page-title user-page__title">{pageTitle}</h1>
        ) : (
          <div className="user-block__avatar">
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
