import React from "react";

import { CatalogContainer } from "../../modules/catalog/catalog-container";

import SvgSprite from "../../components/svg-sprite/svg-sprite";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer.jsx";
import Promo from "../../modules/promo/promo";

const MainPage = () => {
  return (
    <>
      <h1 className="visually-hidden">WTW</h1>
      <SvgSprite />
      <section className="movie-card">
        <Header />
        <Promo />
      </section>
      <div className="page-content">
        <CatalogContainer />
        <Footer />
      </div>
    </>
  );
};
export default MainPage;
