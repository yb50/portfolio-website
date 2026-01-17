// [Header]
// [Page content (changes per route)]
// [Footer]

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function AppShell() {
  return (
    <>
      <div className="header">
        <Header />
      </div>

      <div className="page-content">
        <Outlet />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}