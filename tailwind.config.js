/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
        screens: {
            xs: "360px",
            sm: "480px",
            md: "640px",
            lg: "896px",
            xl: "1120px",
            "2xl": "1408px",
        },
    },
    plugins: [],
};
