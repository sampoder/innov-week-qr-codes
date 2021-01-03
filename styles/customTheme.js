import {theme} from "@chakra-ui/react";

const customTheme = {
    ...theme,
    fonts: {
        body: "'SFRounded', system-ui, sans-serif",
        heading: "'SFRounded', sans-serif",
        mono: "monospace",
      },
    colors: {
        ...theme.colors,
        brand: {
            900: "#1a365d",
            800: "#153e75",
            700: "#2a69ac",
        },

        brandSecondary: {
            900: "#fffafa",
            800: "#f5fffb",
            700: "#f8f8ff",
        },
        blue: {
            900: "#00053E"
        }
    },
};

export default customTheme;