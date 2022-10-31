/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  mode:'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {

    extend: {
        fontFamily:{
            kumbh:['Kumbh Sans', 'sans-serif'],
        },
        boxShadow:{
            'btn':'0px 25px 25px -10px rgba(63, 91, 194, 0.247159)',
        },
        backgroundImage:{
          'split-home-mobile':"linear-gradient(to bottom, #FAFAFA 55% , #25293A 45%);",
            'split-signup-mobile':"linear-gradient(to bottom, #FAFAFA 74% , #25293A 26%);",
            'split-home-desktop': "linear-gradient(to bottom, #FAFAFA 65% , #25293A 35%);",
            'split-signup-desktop': "linear-gradient(to right, #FAFAFA 71% , #25293A 29%);",

        },


    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
  }
}