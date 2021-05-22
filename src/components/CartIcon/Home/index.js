import React from "react";
import Layout from "../../shared/Layout";
import Hero from "../../Hero/index";
import Main from "../../Main/index";
import FeaturedCollection from "../../Featured-Collection/index";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Main />
        <FeaturedCollection />
      </Layout>
    </>
  );
};

export default Home;
