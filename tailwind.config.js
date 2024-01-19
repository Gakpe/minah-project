/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    important: true,
    safelist: ["searchBar2"],
    theme: {
        screens: {
            sm: { max: "767px" },
            // => @media (min-width: 640px and max-width: 767px) { ... }

            md: { min: "768px", max: "1023px" },
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            lg: { min: "1024px", max: "1280px" },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }

            xl: { min: "1281px", max: "1400px" },
            // => @media (min-width: 1280px and max-width: 1400px) { ... } <-- New entry for 1400x900

            "2xl": { min: "1401px", max: "1535px" },
            // => @media (min-width: 1401px and max-width: 1535px) { ... }

            "3xl": { min: "1536" },
            // => @media (min-width: 1536px) { ... }

            'ipad-pro-11': { min: "834px", max: "834px", height: "1194px" }, // iPad Pro 11-inch specific
            'ipad-pro-flip': { min: "834px", max: "1024px", height: "1194px" }, // iPad Pro 11-inch specific
            'ipad-pro-flipped': { min: "834px", max: "1194px", height: "1194px" }, // iPad Pro 11-inch specific
        },

        fontFamily: {
            sans: ["Poppins", "sans-serif"],
            serif: ["Montserrat", "sans-serif"],
        },
        extend: {
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                "fade-in-down": "fade-in-down 0.5s ease-out",
            },
            colors: {
                primary: '#EBEBEB',
                secondary: '#333',
                tertiary: '#4E4E4E',
                ternery: '#5FA8A3',
                button_border: '#2F80ED',
                red: '#DF2D2D',
                text_color: '#93BFBC',
                button: '#5FA8A3',
                formSearch: '#93BFBC',
                backgroundColor: '#A4D8D44D',
                title: '#3e837d',
                textOrange: "#E27B30",
                gradient: 'linear-gradient(135deg, #B6473B, #C3685E, #E27B30, #DFC74C)',
            },
            height: {
                profileSection: "502px",
                contactSection: "280px",
                table: "647px",
                form: "800px",
                schedules: "145px",
                tableHeight: "496px",
                popup: "397px",
            },
            width: {
                image: "824px",
                overviewSection: "1240px",
                formWidth: "610px",
                dropDown: "363px",
                SettingPage: "70% !important",
                schedules: "935px",
                searchBar3: "760px",
                searchBar4: "407px",
                popup: "485px",
                searchBar2: "622px",
                searchBar: "500px",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};