import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function AppShell() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Header />
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
}