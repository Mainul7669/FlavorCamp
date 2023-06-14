import React from "react";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstuctors from "../PopularInstuctors/PopularInstuctors";

import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div className="w-full">
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstuctors></PopularInstuctors>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
