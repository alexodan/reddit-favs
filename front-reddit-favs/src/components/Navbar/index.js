/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header sx={{ variant: "containers.header" }}>
      <nav sx={{ variant: "containers.navbar" }}>
        <Link
          to="/"
          sx={{
            color: "text",
            fontSize: 3,
            cursor: "pointer",
            p: "10px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/favorites"
          sx={{
            color: "text",
            fontSize: 3,
            cursor: "pointer",
            p: "10px",
            textDecoration: "none",
          }}
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
