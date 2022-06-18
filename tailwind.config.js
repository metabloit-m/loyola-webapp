module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
      require('@tailwindcss/forms'),
      require('daisyui'),
      require('tailwind-scrollbar'),
      require('@tailwindcss/typography'),
  ],
    variants: {
        scrollbar: ['rounded']
    },
    daisyui:{
      themes: ["light", "cupcake", "dark"]
    },
}
