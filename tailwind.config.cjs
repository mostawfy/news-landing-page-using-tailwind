/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      "soft-orange": "hsl(35, 77%, 62%)",
      "soft-red": "hsl(5, 85%, 63%)",
      "off-white": "hsl(36, 100%, 99%)",
      "grayish-blue": "hsl(233, 8%, 79%)",
      "dark-gray-blue": "hsl(236, 13%, 42%)",
      "v-dark-blue": "hsl(240, 100%, 5%)",
    },
    fontFamily: {
      Inter: ["Inter", "Sans-serif"],
    },
    backgroundImage: {
      hero: "url('../assets/images/image-web-3-desktop.jpg')",
      "hero-mb": "url('../assets/images/image-web-3-mobile.jpg')",
    },
    extend: {},
  },
  plugins: [],
};
