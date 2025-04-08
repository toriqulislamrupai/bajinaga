/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

  colors:{
   "yellow":"#ed910a"
},
 
  backgroundColor:{
    "bgPrimary":"#002500",
    "bgSupportSidebar":"#003700",
    "tabBackground":"#011401",
    "tabBackgroundTwo":"#021C02",
    "informationBG":"#2b3248",
    "informationActiveColor":"#ff6400",
    

},

  backgroundImage: {
  bgYellow: "linear-gradient(180deg,  #fffad5, #ed910a 47%, #ff6400)",
  bgGreen:"linear-gradient(255deg, #7cf900 4.11%, #008200 76.69%)",
  bgAccount:"linear-gradient(0deg, #f1f9ff00 0, #b3bcc880 100%);",
  bgVIP:"linear-gradient(180deg, rgba(102, 102, 102, .7) 0, rgba(67, 72, 81, .7) 100%)",
  bgAccountTwo:"linear-gradient(180deg, #ffffff 0%, #ffe6f0 100%)",
  bgFooterGreen: "linear-gradient(255deg, #3e8e00 0%, #002800 100%)"

},

      
    },
  },
  plugins: [],
}

