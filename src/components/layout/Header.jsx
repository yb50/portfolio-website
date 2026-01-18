import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        end // makes sure Home doesn't appear active on '/projects'
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Projects
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
}