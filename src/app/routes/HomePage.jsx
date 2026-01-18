import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      <p>Name</p>
      <p>Role line</p>
      <p>1~2 sentence intro</p>

      <Link to="/projects">
        <button>View Projects</button>
      </Link>

      {/* Window with a horizontal scrollbar with one screenshot of each project in it? */}
    </main>
  );
}