module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      code: ['"Source Code Pro"'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
