/** @type {import('tailwindcss').Config} */
module.exports = {
  version: '3.1.4',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        //primary colors
        "Cyan": "hsl(180, 66%, 49%)",
        "Dark-Violet": "hsl(257, 27%, 26%)",
        //secondary colors
        "Red": "hsl(0, 87%, 67%)",
        "Hover-Cyan": "hsl(180, 58%, 71%)",
        //neutral colors
        "Light-Gray" : "rgb(240, 240, 240)",
        "Gray": "hsl(0, 0%, 75%)",
        "Grayish-Violet": "hsl(257, 7%, 63%)",
        "Light-Violet": "hsl(259, 27%, 40%)",
        "Very-Dark-Blue": "hsl(255, 11%, 22%)",
        "Very-Dark-Violet": "hsl(260, 8%, 14%)"
      },
      
      fontFamily:{
        "Poppins" : ['Space Grotesk', 'sans-serif']
      },
      
      backgroundImage: theme => ({
        'shorten-mobile' : "url('/backgrounds/bg-boost-mobile.svg')",
        'shorten-desktop' : "url('/backgrounds/bg-boost-desktop.svg')",
        'boost-mobile' : "url('/backgrounds/bg-boost-mobile.svg')",
        'boost-desktop' : "url('/backgrounds/bg-boost-desktop.svg')"
      })
    },
  },
  plugins: [],
}
