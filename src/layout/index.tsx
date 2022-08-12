import React from "react";
import { Home } from "../pages";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Home />
      </main>
    </>
  );
};
