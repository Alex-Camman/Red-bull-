import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsApp } from "./WhatsApp";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <WhatsApp />
      <Footer />
    </>
  );
};
