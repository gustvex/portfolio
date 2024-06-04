/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
];
export const theme = {
  extend: {
    colors: {
      'custom-black': '#050505',
    },
  },
};
export const plugins = [];