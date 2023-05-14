import React from "react";
import { useLocation } from "react-router-dom";
import { StarIcon, TicketIcon } from "@heroicons/react/24/solid";
import Modal from "../../components/Modal";

function Movie() {
  const { state } = useLocation();
  console.log(state);
  const {
    id,
    image,
    rating,
    summary,
    runtime,
    name,
    genres,
    language,
    premiered,
  } = state;

  return (
    <div className="card card-side bg-base-100 m-3 flex flex-col lg:flex-row">
      {/* image */}
      <div className="m-2 rounded-2xl max-h-screen xl:max-h-96 mx-auto">
        <img
          className="rounded-2xl max-h-screen"
          src={image?.original}
          alt={name && name}
        />
      </div>
      <div className="card-body text-white lg:max-w-xl xl:max-w-3xl">
        {/* movie name */}
        <h2 className="card-title text-3xl">{name && name}</h2>
        {/* rating */}
        <div className="flex items-center gap-1 text-yellow-400 text-xl font-semibold my-3">
          <StarIcon className="h-6 w-6" />
          {rating.average && rating.average}
        </div>
        {/* runtime, genres, language, premiered */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-1 flex flex-col font-semibold">
            <span>Runtime</span>
            <span>Genres</span>
            <span>Language</span>
            <span>Premiered</span>
          </div>
          <div className="col-span-1 flex flex-col">
            <span>: {runtime} min</span>
            <span className="space-x-2">
              :{" "}
              {genres.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </span>
            <span>: {language}</span>
            <span>: {premiered}</span>
          </div>
        </div>

        {/* summary */}
        <span className="border-l-4 border-blue-900 pl-2 text-2xl font-bold mt-5 mb-2 py-4">
          Synopsis
        </span>
        <p className="h-fit text-justify">
          {summary && summary.replace(/(<([^>]+)>)/gi, "")}
        </p>
        <div className="card-actions ">
          <label
            htmlFor="my-modal-6"
            className="btn btn-warning font-bold hover:bg-transparent hover:text-white my-4"
          >
            <TicketIcon className="h-6 w-6 mr-2" />
            Get Tickets
          </label>
        </div>
      </div>
      <Modal state={state} />
    </div>
  );
}

export default Movie;
