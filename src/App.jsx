import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Spinner from "./components/Spinner";
import { useState } from "react";
const Gallery = lazy(() => import("./pages/Gallery"));

const App = () => {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="gallery"
          element={
            <Suspense fallback={<Spinner />}>
              <Gallery  />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
