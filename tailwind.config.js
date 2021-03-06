const plugin = require("tailwindcss/plugin");

module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "media",
    theme: {
        extend: {
            colors: {
                feli: {
                    lightest: "#feeed6",
                    lighter: "#fde4bd",
                    light: "#fbc672",
                    DEFAULT: "#f9a828",
                    dark: "#cf8106",
                    darker: "#845204",
                    darker: "#6C4303",
                    "opacity-100": "rgba(249, 168, 37, 0.1)",
                    "opacity-200": "rgba(249, 168, 37, 0.2)",
                    "opacity-300": "rgba(249, 168, 37, 0.3)",
                    "opacity-400": "rgba(249, 168, 37, 0.4)",
                    "opacity-500": "rgba(249, 168, 37, 0.5)",
                    "opacity-600": "rgba(249, 168, 37, 0.6)",
                    "opacity-700": "rgba(249, 168, 37, 0.7)",
                    "opacity-800": "rgba(249, 168, 37, 0.8)",
                    "opacity-900": "rgba(249, 168, 37, 0.9)",
                },
                dark: {
                    DEFAULT: "#0F0F0F",
                },
            },
            minHeight: {
                64: "64px",
                56: "56px",
                "screen-1/4": "25vh",
                "screen-1/2": "50vh",
                "screen-3/4": "75vh",
            },
            ringOffsetWidth: {
                0: "0px",
                0.5: "0.5px",
                1: "1px",
                1.5: "1.5px",
                2: "2px",
                2.5: "2.5px",
                3: "3px",
                3.5: "3.5px",
                4: "4px",
                4.5: "4.5px",
                5: "5px",
                5.5: "5.5px",
                6: "6px",
                6.5: "6.5px",
                7: "7px",
                7.5: "7.5px",
                8: "8px",
            },
            ringWidth: {
                0: "0px",
                0.5: "0.5px",
                1: "1px",
                1.5: "1.5px",
                2: "2px",
                2.5: "2.5px",
                3: "3px",
                3.5: "3.5px",
                4: "4px",
                4.5: "4.5px",
                5: "5px",
                5.5: "5.5px",
                6: "6px",
                6.5: "6.5px",
                7: "7px",
                7.5: "7.5px",
                8: "8px",
            },
        },
        fontFamily: {
            display: [
                "Inter",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
            ],
        },
    },
    variants: {
        extend: {
            boxShadow: ["active"],
            textColor: ["active", "disabled"],
            backgroundColor: ["active", "disabled"],
            zIndex: ["hover"],
            typography: ["dark"],
        },
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: {
                    fontSize: theme("fontSize.4xl"),
                    fontWeight: theme("fontWeight.bold"),
                },
                h2: {
                    fontSize: theme("fontSize.3xl"),
                    fontWeight: theme("fontWeight.bold"),
                },
                h3: {
                    fontSize: theme("fontSize.2xl"),
                    fontWeight: theme("fontWeight.bold"),
                },
                h4: {
                    fontSize: theme("fontSize.xl"),
                    fontWeight: theme("fontWeight.bold"),
                },
                h5: {
                    fontSize: theme("fontSize.lg"),
                    fontWeight: theme("fontWeight.bold"),
                },
                h6: {
                    fontSize: theme("fontSize.base"),
                    fontWeight: theme("fontWeight.bold"),
                },
            });
        }),
        require("@tailwindcss/typography"),
        require("@tailwindcss/line-clamp"),
    ],
};
