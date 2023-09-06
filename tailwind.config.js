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
                    "0%": { width: "100%" } /* Initial width of the bar */,
                    "100%": { width: "0" } /* Final width of the bar (0%) */,
                },
                moveAndReturn: {
                    "0%": { transform: "translateX(100%)" } /* Initial position, translate-x-0 */,
                    "5%": { transform: "translateX(0)" } /* Initial position, translate-x-0 */,
                    "95%": { transform: "translateX(0)" } /* Maintain position for 30% of the animation */,
                    "100%": { transform: "translateX(100%)" } /* Return to the original position */,
                },
            },
            animation: {
                zoom: "zoom 80s ease-in-out infinite",
                decrease: "decrease 5s linear" /* Apply the "decrease" animation for 5 seconds */,
                moveAndReturn: "moveAndReturn 5s linear" /* Apply the "moveAndReturn" animation */,
            },
        },
    },
    variants: {},
    plugins: [],
};
