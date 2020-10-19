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
      width: "100vw",
      bg: "primary",
      borderBottom: "1px solid",
      borderColor: "primary",
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
    },
  },
  styles: {
    ...roboto.styles,
  },
};

export default theme;
