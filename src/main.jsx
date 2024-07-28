import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Pages/Layout.jsx";
import About from "./Components/About/About.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import Destinations from "./Components/Destinations/Destinations.jsx";
import Home from "./Components/Home/Home.jsx";

Aos.init({
  duration: 1000,
  easing: "ease-in",
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/destinations" element={<Destinations />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
