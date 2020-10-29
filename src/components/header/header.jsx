import React from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";

import cx from "classnames";

const Header = ({ className, pageTitle }) => {
  const user = useSelector((state) => state.auth.user);
  const { url } = useRouteMatch();

  const isAuthPage = url === `/auth`;

  return (
    <header className={cx(`page-header movie-card__head`, className)}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="user-block">
        {pageTitle && (
          <h1 className="page-title user-page__title">{pageTitle}</h1>
        )}
        {user ? (
          <Link to="/favorites">
            <div className="user-block__avatar">
              <img
                src={`https://htmlacademy-react-2.appspot.com/${user.avatar_url}`}
                alt={user.name}
                width="63"
                height="63"
              />
            </div>
          </Link>
        ) : (
          isAuthPage || (
            <Link to="/auth" className="user-block__link">
              Sign in
            </Link>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
