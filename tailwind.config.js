/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

  colors:{
   "yellow":"#ed910a",
   "vipTextColor":"#543c00",
   "lowRed":"#bb3c55",
   "borderGreen":"#23e63a",
   "textRed":"#fd2f2f",
   "warnIcon":"#f8bb86",
   "depositBlue":"#5076f3",
},
 
  backgroundColor:{
    "bgPrimary":"#002500",
    "bgSupportSidebar":"#003700",
    "tabBackground":"#011401",
    "tabBackgroundTwo":"#021C02",
    "informationBG":"#2b3248",
    "informationActiveColor":"#ff6400",
    "informationMenuTriggerBg":"#282f3c",
    "informationMenuBg":"#192b39",
    "informationMenuOptionsBg":"#263548",
    "bgRed":"#fd2f2f",
    "logOutButton":"hsla(0, 0%, 53%, .9)",
    "reloadBg":"bg-[rgba(0, 0, 0, .1)]",
    

},

  backgroundImage: {
  bgYellow: "linear-gradient(180deg,  #fffad5, #ed910a 47%, #ff6400)",
  bgGreen:"linear-gradient(255deg, #7cf900 4.11%, #008200 76.69%)",
  bgAccount:"linear-gradient(0deg, #f1f9ff00 0, #b3bcc880 100%);",
  bgVIP:"linear-gradient(180deg, rgba(102, 102, 102, .7) 0, rgba(67, 72, 81, .7) 100%)",
  bgAccountTwo:"linear-gradient(180deg, #ffffff 0%, #ffe6f0 100%)",
  bgFooterGreen: "linear-gradient(255deg, #3e8e00 0%, #002800 100%)",
  bgGreenTwo:"linear-gradient(255deg, #3a7700 4.11%, #004d00 76.69%)",
  VIPTextImage:"linear-gradient(278deg, #e8a31d 87%, #dcb05b 0, #ebbb5e 0, #d1992c 0)",
  helpTabBackground:"linear-gradient(180deg, #fffad5, #ed910a 47%, #ff6400)",
  accountDetailsTittleHover:"linear-gradient(to top, rgba(46, 42, 66, .92), rgba(81, 78, 98, .92))",
  depositHistoryTextBackground:"linear-gradient(90deg, rgba(255, 253, 251, .2) 0, #ffe7d6 100%), linear-gradient(#f5f5f5, #f5f5f5)",
  withdrawTimeImage:"linear-gradient(90deg, rgba(255, 253, 251, .2) 0, #ffe7d6 100%)",
  vipMobileBg:"linear-gradient(30deg, rgb(235, 196, 167), rgb(204, 147, 114))",
  overviewTab1Bg:"linear-gradient(117deg, #abdcff 0, #0396ff 100%)",
  overViewTab2Bg:"linear-gradient(117deg, #ce9ffc 0, #7367f0 100%)",
  ReferralBg:" linear-gradient(103deg, #97abff 0, #123597)",
  winnersBg:" linear-gradient(112deg, #43cbff 0, #9708cc)",
  highestBg:"linear-gradient(270deg, #7cc4f8 0, #abdcff 100%)",
  shareFriendsBg:"linear-gradient(to bottom, #f3f7fb 0, #e0e9f1 100%)",
  shareToFriendsBg:"linear-gradient(100deg, #6b73ff 0, #000dff)",
  overViewLastImage:"linear-gradient(180deg, #f3fbf4 0, #bdd5e9 100%)",
  priceReviewBg:"linear-gradient(to bottom, #f3f7fb 0, #e0e9f1 100%)",
  buttonAvailableBg:"linear-gradient(107deg, #43cbff 0, #9708cc)",
  inviteRewardImage:"linear-gradient(to bottom, #f3f7fb 0, #e0e9f1 100%)",
  phoneVIP:"linear-gradient(180deg, hsla(0, 0%, 40%, .9), rgba(67, 72, 81, .9))",
  phoneVipTabs:"linear-gradient(0deg, hsla(0, 0%, 100%, .7), hsla(0, 0%, 100%, .3) 33.33%, hsla(0, 0%, 100%, 0) 67%, #fff)",
  appDownloadBg:"linear-gradient(180deg, #fffad5, #ed910a 47%, #ff6400)",
  

},

      
    },
  },
  plugins: [],
}

