import { roboto } from "@theme-ui/presets";

const theme = {
  ...roboto,
  colors: {
    ...roboto.colors,
    text: "#000",
    background: "#fff",
    primary: "#07c",
    modes: {
      dark: {
        text: "#fff",
        background: "#000",
        primary: "#0cf",
      },
    },
  },
  containers: {
    header: {
      height: "60px",
      bg: "primary",
    },
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      variant: "containers.page",
      height: "100%",
    },
    card: {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      border: "1px solid",
      borderColor: "muted",
      borderRadius: "4px",
      p: 2,
      width: "325px",
    },
    gridIcon: {
      position: "absolute",
      top: "4.5rem",
      right: "1.5rem",
      fontSize: "3rem",
      borderRadius: "50%",
      boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.5)",
      p: ".5rem",
      cursor: "pointer",
      zIndex: "2",
    },
  },
  styles: {
    ...roboto.styles,
  },
};

export default theme;
