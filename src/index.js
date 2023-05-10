import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviePage from './pages/MoviePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/movies', element: <Movies /> },
      {
        path: '/movies/:movieId',
        element: <MoviePage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
);