import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home, AboutUs, ServicesPage, Gallery, ContactUs } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
};
