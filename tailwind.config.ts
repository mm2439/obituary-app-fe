import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sourceSerif: ["var(--font-sourceserif)"],
      greatVibes: ["var(--font-greatvibes)"],
      sourcesans: ["Source Sans 3"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-dark-bottom": "-5px -5px 10px #FAFBFF, 5px 5px 10px #A6ABBD",
        "custom-light-dark": "5px 5px 10px #C2C2C250",
        "custom-light-dark-with-white":
          "-5px -5px 10px #FFFFFF, 5px 5px 10px #C2C2C250",
        "custom-light-dark-with-white-button":
          "-3px -1px 10px #FFFFFF, 1px 2px 4px #00000025",

        "custom-light-dark-banner":
          "0px 4px 32px #00000020, 0px 2px 4px #00000020",
        "custom-light-dark-box-image":
          "-3px -3px 7px #FFFFFF70, 1px 4px 4px #00000025, 5px 5px 10px #C2C2C250",
        "custom-light-dark-box":
          "-2px -2px 7px #FFFFFF40, 1px 3px 4px #00000018, 5px 5px 10px #C2C2C250",
        "custom-light-dark-box-image-wall":
          "-3px -3px 7px #FFFFFF70, 5px 5px 20px #00000050",
        "box-shadow": "0px 4px 4px #00000025",
        "box-shadow-inner": "inset 0px 4px 4px #00000025",
        "popup-shadow": "0px 4px 10px #00000030",
        "custom-dark-dark-box-image-wall":
          "-3px -3px 7px #8F8C8B50, 5px 5px 20px #8F8C8B50",
        "custom-dark-to-white":
          "inset 3px 3px 5px rgba(166, 171, 189, 1), inset -3px -3px 3px rgba(250, 251, 255, 0.46)",
        "custom-shadow": "5px 5px 10px 0px #C2C2C280",
        "custom-dual": "-5px -5px 10px 0px #FFFFFF, 5px 5px 10px 0px #C2C2C280",
      },
      transform: {
        "stretch-y": "scaleY(2)",
      },
      screens: {
        smmobile: { max: "400px" },
        mobile: { max: "739px" },
        tablet: { min: "740px", max: "1279px" },
        desktop: { min: "1280px" },
        //For user account screens
        desktopUserAcc: { min: "1280px" },
        tabletUserAcc: { min: "739px", max: "1279px" },
        mobileUserAcc: { max: "740px" },
      },
      fontVariationSettings: {
        customOpt12:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 12",
        customOpt13:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 13",
        customOpt14:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 14",
        customOpt16:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 16",
        customOpt18:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 18",
        customOpt20:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 20",
        customOpt24:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 24",
        customOpt28:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 28",
        customOpt32:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 32",
        customOpt36:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 36",
        customOpt40:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 40",
        customOpt40Italic:
          "'slnt' -10,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 40",
        customOpt11wdth90XTRA16:
          "'slnt' 0,'wdth' 90,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 416,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 11",
        customOpt24wght100:
          "'slnt' 0,'wdth' 100,'wght' 100,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 24",
        customOpt24wght900:
          "'slnt' 0,'wdth' 100,'wght' 900,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 24",
        customOpt16wght700:
          "'slnt' 0,'wdth' 100,'wght' 700,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 16",
        customOpt17Xopq90:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 90,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 17",
        customOpt20wght500:
          "'slnt' 0,'wdth' 100,'wght' 500,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 20",
        customOpt24wght700:
          "'slnt' 0,'wdth' 100,'wght' 700,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 24",
        customOpt32wght500:
          "'slnt' -10,'wdth' 100,'wght' 500,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 32",
        customOpt48:
          "'slnt' 0,'wdth' 100,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 48",
        customOpt18wdth50:
          "'slnt' 0,'wdth' 50,'wght' 500,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 18",
        customOpt18wdth50wght400:
          "'slnt' 0,'wdth' 50,'wght' 400,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 18",
        customOpt24wght50:
          "'slnt' 0,'wdth' 50,'wght' 100,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 24",
        customOpt32wdth50wght600:
          "'slnt' 0,'wdth' 50,'wght' 600,'GRAD' 0,'XOPQ' 96,'XTRA' 468,'YOPQ' 79,'YTAS' 750,'YTDE' -203,'YTFI' 738, 'YTLC' 514,'YTUC' 712,'opsz' 32",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: any) {
      const newUtilities = {
        ".font-variation-customOpt12": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt13": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt14": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt16": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt17": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt18": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt20": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt24": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt32": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt36": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt40": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt40Italic": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt11wdth90XTRA16": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt24wght100": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt24wght900": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt16wght700": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt17Xopq90": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt28": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt20wght500": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt24wght700": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt32wght500": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt48": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt18wdth50": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt18wdth50wght400": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt24wght50": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
        ".font-variation-customOpt32wdth50wght600": {
          fontVariationSettings: theme("fontVariationSettings.custom"),
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    require("daisyui"),
  ],
};
export default config;
