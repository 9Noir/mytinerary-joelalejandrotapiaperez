/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
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
                    "50%": { transform: "scale(1.7)", transformOrigin: "right bottom" },
                },
                decrease: {
                    "0%": { width: "100%" },
                    "100%": { width: "0" },
                },
                moveAndReturn: {
                    "0%": { transform: "translateX(100%)" },
                    "5%": { transform: "translateX(0)" },
                    "95%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(100%)" },
                },
            },
            animation: {
                zoom: "zoom 80s ease-in-out infinite",
                decrease: "decrease 4.5s linear",
                moveAndReturn: "moveAndReturn 5s linear",
            },
        },
    },
    variants: {},
    plugins: [],
};
