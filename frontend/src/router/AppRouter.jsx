import { Routes, Route, Navigate } from "react-router-dom";
import { Layout, ScrollToTop } from "@components";
import { Home, Gallery } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
