/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

  colors:{

},
 
  backgroundColor:{
    "bgPrimary":"#002500",
    "bgSupportSidebar":"#003700",
    "tabBackground":"#011401",
    "tabBackgroundTwo":"#021C02",
},

  backgroundImage: {
  bgYellow: "linear-gradient(180deg,  #fffad5, #ed910a 47%, #ff6400)",
  bgGreen:"linear-gradient(255deg, #7cf900 4.11%, #008200 76.69%)",
},

      
    },
  },
  plugins: [],
}

