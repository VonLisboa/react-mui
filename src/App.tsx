import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import DefaultLayout from "./layout/DefaultLayout";

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </BrowserRouter>
  );
}
