/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '88': '22rem', // Adding custom height
      },
      screens: {
        'xs': '425px', // Custom breakpoint for iPhone 14 Pro Max
      },
       colors: {
        'yankees-blue': '#133240',
        'palatinate-purple': '#6F2A53',
        'royal-orange': '#F59D48',
        'fire-opal': '#E85846',
        'pewter-blue': '#82BABB',
        'madder-lake': '#C2373D',
        'deep-peach': '#F8CCA7',
        'yellow-munsell': '#F2CB05',
      },
      fontFamily: {
        'montserrat-bold': ['Montserrat-Bold', 'sans-serif'],
        'montserrat-regular': ['Montserrat-Regular', 'sans-serif'],
        'montserrat-semibold': ['Montserrat-SemiBold', 'sans-serif'],
        'montserrat-extrabold': ['Montserrat-ExtraBold', 'sans-serif'],
        'montserrat-light': ['Montserrat-Light', 'sans-serif'],
        'montserrat-extralight': ['Montserrat-ExtraLight', 'sans-serif'],
        'montserrat-thin': ['Montserrat-Thin', 'sans-serif'],
        'montserrat-black': ['Montserrat-Black', 'sans-serif'],
        'montserrat-italic': ['Montserrat-Italic', 'sans-serif'],
        'montserrat-blackitalic': ['Montserrat-BlackItalic', 'sans-serif'],
        'montserrat-bolditalic': ['Montserrat-BoldItalic', 'sans-serif'],
        'montserrat-semibolditalic': ['Montserrat-SemiBoldItalic', 'sans-serif'],
        'montserrat-extrabolditalic': ['Montserrat-ExtraBoldItalic', 'sans-serif'],
        'montserrat-lightitalic': ['Montserrat-LightItalic', 'sans-serif'],
        'montserrat-extralightitalic': ['Montserrat-ExtraLightItalic', 'sans-serif'],
        'montserrat-thinitalic': ['Montserrat-ThinItalic', 'sans-serif'],
        'montserrat-medium': ['Montserrat-Medium', 'sans-serif'],
        'montserrat-mediumitalic': ['Montserrat-MediumItalic', 'sans-serif'],
        'arabicLight': ['ArabicLight', 'sans-serif'],
        'arabicMedium': ['ArabicMedium', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
  
};
