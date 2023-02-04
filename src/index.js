import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import ScrollPainting from './pages/ScrollPainting.js'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "scrollpainting",
    element: <ScrollPainting />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <RouterProvider router={router} />
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/scrollpainting' element={<ScrollPainting />} />
    </Routes>
  </BrowserRouter>
);