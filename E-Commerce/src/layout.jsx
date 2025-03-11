import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function Layout() {
  const location = useLocation();

  return (
    <div className="bg-[#e9e1de] p-5">
      <Header />
      <Outlet />
      {/* Hide footer on the profile page */}
      {location.pathname !== "/profile" && <Footer />}
    </div>
  );
}

export default Layout;
