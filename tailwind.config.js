/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "375px" },
      },
      colors: {
        Marine_blue: "hsl(213, 96%, 18%)",
        Purplish_blue: "hsl(243, 100%, 62%)",
        Pastel_blue: "hsl(228, 100%, 84%)",
        Light_blue: "hsl(206, 94%, 87%)",
        Strawberry_red: "hsl(354, 84%, 57%)",
        Cool_gray: "hsl(231, 11%, 63%)",
        Light_gray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
        White: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        desktop: "url('./src/assets/images/bg-sidebar-desktop.svg')",
        mobile: "url('./src/assets/images/bg-sidebar-mobile.svg')",
      },
      fontFamily: {
        ubuntu: ["Ubuntu"],
      },
    },
  },
  plugins: [],
};
