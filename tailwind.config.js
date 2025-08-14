
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    safelist: [
      'underline',
      'decoration-yellow-500',
      'decoration-2',
      'decoration-red-700',
      'text-red-700'
    ],
  }
  