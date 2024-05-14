/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: "#240750",
            },
        },
    },
    plugins: [],
};
