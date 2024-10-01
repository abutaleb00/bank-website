/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: ({
        'custom-image': "url('/src/assets/footer-bg.png')",
      }),
      zIndex: {
        'my-custom-index': 9999,
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"]
    }
  }
}

