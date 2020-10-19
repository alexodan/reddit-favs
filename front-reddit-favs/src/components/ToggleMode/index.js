/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "theme-ui";

const ToggleMode = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header>
      <button
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
        sx={{
          bg: "transparent",
          outline: "none",
          fontSize: "2rem",
          border: "none",
          cursor: "pointer",
          position: "absolute",
          top: ".3rem",
          right: "1rem",
        }}
      >
        {colorMode === "default" ? "🌚" : "🌞"}
      </button>
    </header>
  );
};

export default ToggleMode;
