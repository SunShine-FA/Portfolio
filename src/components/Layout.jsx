import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="portfolio-wrapper">
      {/* Decorative background blobs */}
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />

      {/* Floating dots */}
      <div className="dot dot-1" />
      <div className="dot dot-2" />
      <div className="dot dot-3" />

      {/* Shared fixed/persistent Navbar */}
      <Navbar />

      {/* Dynamic sub-page content */}
      <Outlet />
    </div>
  );
}

export default Layout;
