/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "480px",
            },
        },
    },
    variants: {},
    plugins: [],
};
