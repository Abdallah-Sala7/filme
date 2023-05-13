import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviePage from "./pages/MoviePage";
import AuthLayout from "./pages/AuthLayout";
import { Login, Register, WithGaurd } from "./components";
import Interests from "./pages/Interests";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <WithGaurd>
        <RootLayout />
      </WithGaurd>
    ),
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:movieId",
        element: <MoviePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "/auth/login", element: <Login /> },
      { path: "/auth/register", element: <Register /> },
    ],
  },
  {
    path: "interests",
    element: (
      <WithGaurd>
        <Interests />
      </WithGaurd>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
