import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";
import Movie from "../pages/Main/Movie";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://api.tvmaze.com/search/shows?q=all"),
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;
