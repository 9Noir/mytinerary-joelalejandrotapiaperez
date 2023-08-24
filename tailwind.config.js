/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "480px",
            },
            keyframes: {
                zoom: {
                    "0%, 100%": { transform: "scale(1)", transformOrigin: "right top" },
                    "50%": { transform: "scale(1.7)", transformOrigin: "right bottom"  },
                  },
            },
            animation: {
                zoom: "zoom 80s ease-in-out infinite",
            },
        },
    },
    variants: {},
    plugins: [],
};