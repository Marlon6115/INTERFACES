/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Ajusta esto a la ruta de tus archivos
  theme: {
    extend: {
      colors: {
        primary: '#fefdff',
        secondary: {
          DEFAULT: '#111113',
          gray: '#4f4f4f',
          gray2: '#cecece', // Usado mucho para bordes y placeholders
          gray3: '#cfcfcf',
          gray4: '#2e2e2e',
          orange: '#e04622',
          'orange-soft': '#ffe8dd', // orange2
          'orange-bright': '#ff844b', // orange3
        },
        white: '#fff',
        'white-gray': '#f5f5f5',
        black: '#111116',
      },
      fontFamily: {
        poppins: ['Poppins-Regular', 'sans-serif'],
        'poppins-light': ['Poppins-Light', 'sans-serif'],
        'poppins-medium': ['Poppins-Medium', 'sans-serif'],
        'poppins-semibold': ['Poppins-SemiBold', 'sans-serif'],
        'poppins-bold': ['Poppins-Bold', 'sans-serif'],
        'poppins-black': ['Poppins-Black', 'sans-serif'],
      },
      fontSize: {
        '9xl': '11rem', // Tu tamaño personalizado gigante
      },
      screens: {
        'sm': '600px',
        'md': '700px',
        'lg': '1150px',
        'xl': '1400px',
      },
      borderRadius: {
        '4xl': '3rem',
        '5xl': '5rem',
      }
    },
  },
  plugins: [],
}