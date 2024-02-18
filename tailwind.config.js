/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "heroImage": "url('/public/kitchen 5.png')",
        "bgUberUns": "url('/public/background.png')",
        "treffenBg": "url('/public/treffenBg.png')",
      },
      
      colors: {
        primary: "#DCA14D",
        secondary: "#1e1e1e",
        white: "#f5f5f5",
      },

      animation: {
        moveInLeft: "moveInLeft 1s ease-out",
        moveInBottom: "moveInBottom 1s ease-out",
        moveInRight: "moveInRight 1s ease-out",
        moveInTop: "moveInTop 0.3s ease-out",
      },

      keyframes: {
        moveInLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-5rem)",
          },
          "80%": {
            transform: "translateX(1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        moveInBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(3rem)",
          },
          "80%": {
            transform: "translateY(-0.5rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0)",
          },
        },
        moveInTop: {
          "0%": {
            opacity: 0,
            transform: "translateY(-1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0)",
          },
        },
        moveInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(5rem)",
          },
          "80%": {
            transform: "translateX(-1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0)",
          },
        },
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
