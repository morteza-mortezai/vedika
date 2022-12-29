module.exports = {
  plugins: [require('daisyui'),require("tailwindcss-flip")],
  theme: {
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1140px',
    // },
  },
  daisyui: {
    rtl:false,
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "primary":"#616A87",
          "primary-focus": "#ADB7D1",
          "secondary": "#FFCD1A",
          "secondary-focus":"#FFF6D6",
          "base-content": "#4B536C",//txt
          "neutral": "#F3F4F8",
          "neutral-focus": "#dadbdf",
          "neutral-content": "#4B536C",
        
         
        },
      
      },
    ],
  },
};
