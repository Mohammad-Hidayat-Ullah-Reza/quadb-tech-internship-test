import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import { useLoaderData } from "react-router-dom";

function Home() {
  const movies = useLoaderData();

  return (
    <>
      <h1 className="font-bold leading-normal text-white text-5xl p-7 pb-2 text-center">
        Welcome to Rectangel Cineplex
      </h1>
      <div className="border-t-8 border-blue-900 w-3/4 mx-auto mb-8"></div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 p-3">
        {movies.map((movie) => (
          <MovieCard key={movie.show.id} data={movie} />
        ))}
      </div>
    </>
  );
}

export default Home;
