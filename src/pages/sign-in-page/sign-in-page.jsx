import React from "react";

import SignInForm from "../../modules/sign-in-form/sign-in-form";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const SignInPage = () => {
  return (
    <div className="user-page">
      <Header className="user-page__head" pageTitle={`Sign in`} />
      <SignInForm />
      <Footer />
    </div>
  );
};

export default SignInPage;
