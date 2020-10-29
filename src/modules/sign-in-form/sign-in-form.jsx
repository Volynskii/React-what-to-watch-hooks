import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { loginAsync } from "../../store/auth/actions";

const SignInForm = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const error = useSelector((state) => state.auth.authError);
  const dispatch = useDispatch();

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(loginAsync({ email, password }));
  };

  return (
    <div className="sign-in user-page__content">
      <form action="#" className="sign-in__form" onSubmit={onSubmit}>
        <div className="sign-in__message">{error && <p>{error}</p>}</div>
        <div className="sign-in__fields">
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              onChange={(evt) => setEmail(evt.target.value)}
            />
            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-email"
            >
              Email address
            </label>
          </div>
          <div className="sign-in__field">
            <input
              className="sign-in__input"
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
              onChange={(evt) => setPassword(evt.target.value)}
            />
            <label
              className="sign-in__label visually-hidden"
              htmlFor="user-password"
            >
              Password
            </label>
          </div>
        </div>
        <div className="sign-in__submit">
          <button className="sign-in__btn" type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
