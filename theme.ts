// theme.ts or theme.js
import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 480, // Tailwind: "xs": "480px"
      sm: 640, // Tailwind: "sm": "640px"
      md: 768, // Tailwind: "md": "768px"
      lg: 1024, // Tailwind: "lg": "1024px"
      xl: 1280, // Tailwind: "xl": "1280px"
    },
  },
});

export default muiTheme;
