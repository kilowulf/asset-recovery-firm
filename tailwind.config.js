/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: { sans: ["Garamond", "serif"] },
    colors: { maroon: "#4a1016" }
  }
}; // Add Garamond as the default sans font
export const plugins = [];
