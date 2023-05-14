import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col justify-center gap-8 items-center h-screen">
      <div className="text-white text-5xl font-bold text-center flex flex-col items-center justify-center gap-4">
        <span className="text-7xl text-blue-300">404</span>
        Opps Something Went Wrong!
      </div>
      <Link
        to="/"
        className="btn btn-warning uppercase text-2xl font-semibold hover:bg-transparent hover:text-white"
      >
        back to homepage
      </Link>
    </div>
  );
}

export default ErrorPage;
