import React from "react";
import SvgSprite from "../../components/svg-sprite/svg-sprite";
import Catalog from "../../modules/catalog/catalog.jsx";
import Intro from "../../modules/intro/intro.jsx";
import Footer from "../../components/footer/footer.jsx";

const MainPage = () => {
  return (
    <>
      <h1 className="visually-hidden">WTW</h1>
      <SvgSprite />
      <Intro />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </>
  );
};
export default MainPage;
