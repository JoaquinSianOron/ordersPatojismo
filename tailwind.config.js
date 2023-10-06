/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
   'Lalezar': ['Lalezar'],
   'Inter' : ['Inter']
 },
 
 extend: {
   colors:{
     gris:{
       100: '#4D4D4D',
       200: '#999',
       300: '#D9D9D9'
     },
     blanco : '#FFF',
     piel:{
       100:'#AA8787',
       200: '#B89595'
     },
     cafe:'#966810'
   },
   width: {
     '168': '168px',
     '147': '147px',
     '83': '83px',
     '439': '439px',
     '82': '82px',
     '320': '320px',
     '279': '279px',
     '104': '104px',
   },
   height: {
     '61': '61px',
     '41': '41px',
     '26': '26px',
     '103': '103px',
     '21': '21px',
     '21': '21px',
     '65': '65px',
     '107': '107px',
   },
 },
},
plugins: [],
}

