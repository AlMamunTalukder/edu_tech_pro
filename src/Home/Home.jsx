/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "../components/Header/Banner/Banner";
import AllCategories from "../components/Categories/AllCategories";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const educations = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <AllCategories educations={educations}></AllCategories>
    </div>
  );
};

export default Home;
