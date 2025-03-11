import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function Layout() {
  const location = useLocation();
  const hideFooterOnPages = ["/profile"];

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {!hideFooterOnPages.includes(location.pathname) && <Footer />}
    </>
  );
}

export default Layout;
