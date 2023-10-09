/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../components/Header/Banner/Banner";
import AllCategories from "../components/Categories/AllCategories";
import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const educations = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <br />
      <AllCategories educations={educations}></AllCategories>
      <Footer></Footer>
    </div>
  );
};

export default Home;
