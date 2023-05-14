import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ data }) {
  const { score, show } = data;

  const { id, image, runtime, name, genres, language, premiered } = show;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-full w-full" src={image?.medium} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name && name}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 ">
          <div className="col-span-1 flex flex-col font-semibold">
            <span>Runtime</span>
            <span className="hidden md:block">Genres</span>
            <span>Language</span>
            <span className="hidden md:block">Premiered</span>
          </div>
          <div className="col-span-1 flex flex-col flex-wrap">
            <span>: {runtime} min</span>
            <span className="space-x-2 hidden md:block">
              :{" "}
              {genres.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </span>
            <span>: {language}</span>
            <span className="hidden md:block">: {premiered}</span>
          </div>
        </div>
        <div className="card-actions mt-5">
          <Link
            to={`/movie/${id}`}
            state={show}
            className="btn btn-warning font-semibold hover:bg-transparent hover:text-white"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
