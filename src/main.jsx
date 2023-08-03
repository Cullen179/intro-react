import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Example from "./Example";
import ImpureFunction from "./ImpureFunction";
import PureFunction from "./PureFunction";
import StateReactJS from "./StateReactJS";
import RefDom from "./RefDom";
import RefValue from "./RefValue";
import EffectRender from "./EffectRender";
import EffectSubcribe from "./EffectSubcribe";
import EffectWhyCleanup from "./EffectWhyCleanup";
import MultipleState from "./MultipleState";
import QueuePrevState from "./QueuePrevState";
import Ex1 from "./Ex1";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";
import ChildrenProps from "./ChildrenProps";
import Footer from "./Footer";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/example",
    element: <Example />,
  },

  {
    path: "/impure-function",
    element: <ImpureFunction />,
  },

  {
    path: "/pure-function",
    element: <PureFunction />,
  },
  {
    path: "/statereactjs",
    element: <StateReactJS />,
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
  {
    path: "/multiplestate",
    element: <MultipleState />,
  },
  {
    path: "/queueprevstate",
    element: <QueuePrevState />,
  },
  {
    path: "/ex1",
    element: <Ex1 />,
  },
  {
    path: "/ex2",
    element: <Ex2 />,
  },
  {
    path: "/ex3",
    element: <Ex3 />,
  },
  {
    path: "/childrenprops",
    element: <ChildrenProps />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
