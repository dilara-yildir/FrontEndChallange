/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Dark mode sınıfa dayalı olarak çalışır
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#4731D3', // Özel renk tanımı
        customDarkBlue: '#171043', // Özel renk tanımı
        customSkillDark: '#252128', // Özel renk tanımı
        customTitleSkillDark:'#CBF281',
        customHeadRightDark:'#19210b',
        customGray: '#777777',
        customGrayDark: '#FFFFFF',
        customPurpleDark: '#8173DA',
        customLinkColor:  '#120B39',
        customCardColorDark: ' #2B2727', 
        customCardTextColorDark: '#FFFFFF',
        customLightModeColor: '#D9D9D9',
        customDark: "#8F88FF",


      },
    },
  },
  plugins: [],
};