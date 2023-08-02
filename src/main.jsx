import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import RefDom from "./RefDom";
import RefValue from "./RefValue";
import EffectRender from "./EffectRender";
import EffectSubcribe from "./EffectSubcribe";
import EffectWhyCleanup from "./EffectWhyCleanup";
import Footer from "./Footer";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/refdom",
    element: <RefDom />,
  },
  {
    path: "/refvalue",
    element: <RefValue />,
  },
  {
    path: "/effectrender",
    element: <EffectRender />,
  },
  {
    path: "/effectsubcribe",
    element: <EffectSubcribe />,
  },
  {
    path: "/effectwhycleanup",
    element: <EffectWhyCleanup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
