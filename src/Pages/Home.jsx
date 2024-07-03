import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";

const Home = () => {
  const { listings } = useLoaderData();

  useEffect(() => {
    document.title = "Realisto - Home";
  }, []);

  return (
    <div className="container mx-auto">
      <Banner></Banner>

      <div className="grid grid-cols-1 gap-12 justify-around lg:grid-cols-3">
        {listings.map((list) => (
          <Cards key={list.id} data={list} />
        ))}
      </div>
    </div>
  );
};

export default Home;
