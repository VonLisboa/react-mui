import React from "react";
import Home from "./pages/Home";
import Painel from "./pages/Painel";
import NotFound from "./pages/NotFound";

//import { Route, Routes } from "react-router";
import { useRoutes } from "react-router-dom";

/*Routes is used to be Switch*/
const Router = () => {
  /* nesting routes*/
  /*return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );*/

  // object-based routes
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "painel", element: <Painel /> },
    { path: "*", element: <NotFound /> },
  ]);
};
export default Router;