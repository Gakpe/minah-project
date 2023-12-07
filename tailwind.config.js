/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
       "./src/**/*.{js,jsx,ts,tsx}",
    ],
    important: true,
    safelist: ["searchBar2"],
    theme: {
        screens: {
            sm: {min: "640px", max: "767px"},
            // => @media (min-width: 640px and max-width: 767px) { ... }

            md: {min: "768px", max: "1023px"},
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            lg: {min: "1024px", max: "1280px"},
            // => @media (min-width: 1024px and max-width: 1279px) { ... }

            xl: {min: "1281px", max: "1535px"},
            // => @media (min-width: 1280px and max-width: 1535px) { ... }

            "2xl": {min: "1536"},
            // => @media (min-width: 1536px) { ... }
            'ipad-pro-11': {min: "834px", max: "834px", height: "1194px"}, // iPad Pro 11-inch specific
            'ipad-pro-flip': {min: "834px", max: "1024px", height: "1194px"}, // iPad Pro 11-inch specific
            'ipad-pro-flipped': {min: "834px", max: "1194px", height: "1194px"}, // iPad Pro 11-inch specific
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
                title: "#3e837d",
                primary: "#f5f6f8",
                backgroundColor: "#A4D8D44D",
                tertiary: "#4E4E4E",
                secondary: "#3F3F3F",
                ternery: "#5FA8A3",
                border_right: "#437874",
                tab_color: "#05A8A8",
                text_color: "#93BFBC",
                button: "#5FA8A3",
                formSearch: "#93BFBC",
                bg2: "black",
                machineBackground: "#666666",
                quaternary: "#e5e5e5",
                quinary: "#2F2F2F",
                border: "white",
                searchBar: "#b0a2a2cc",
                searchBar2: "#636262",
                Button: "#5FA8A3",
                FieldInput: "#2F2F2F",
                loginScreem: "#3f3f3f",
                bgSearchBar: "#BEBEBE",
                bgSearchBar1: "#E1E1E1",
                searchBarText: "rgba(93, 93, 93, 0.8)",
                textColor: "#2F2F2F",
                borderTertiary: "#BABABA",
                textColor2: "#5D5D5D",
                Button2: "#4E4E4E",
                settingSidebar: "#6B6B6B",
                settingSidebar2: "#4E4E4E",
                DetailTable: "#4F4C5B",
                link: "#1879B9",
                textColor3: "#272727",
                buttonHover: "#636363",
                checkBoxBg: "#F0F0F0",
                bgRightSidebar: "#E1E1E1",
                textColor4: "rgba(93, 93, 93, 0.7)",
                textColor5: "#313132",
                buttonBackground: "#C4C4C4",
                buttonBackground2: "#C4C4C4",
                profileBackground: "#E8E8E9",
                TableHead: "#737373",
                borderDashed: "rgba(78, 78, 78, 0.6)",
                borderDashedBackground: "rgba(217, 217, 217, 0.6)",
                detailSectionFont: "rgba(39, 39, 39, 0.8)",
                link2: "#588CF2",
                AccordionBorder: "#959595",
                toggle: "rgba(107, 107, 107, 0.8)",
                buttonBorder: "#BEBEBE",
                borderSearchBar3: "#757575",
                inputBackground: "#E8E8E8",
                inputBorder: "#929292",
                textColor6: "#747474",
                quickTips: "#438985",
                redColor: "#D25C54",
                blackColor: "#000000",
                bgHover: "#CCCCCC",
                searchBarBg: "#D9CCEB",
            },
            height: {
                table: "647px",
                form: "800px",
                schedules: "145px",
                tableHeight: "496px",
                popup: "397px",
            },
            width: {
                image: "824px",
                formWidth: "410px",
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