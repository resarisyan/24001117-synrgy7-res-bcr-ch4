/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/views/**/*.html'],
  theme: {
    extend: {
      colors: {
        'primary-color-5': '#091B6F',
        'primary-color-4': '#0D28A6',
        'primary-color-3': '#5E70C4',
        'primary-color-2': '#AEB7E1',
        'primary-color-1': '#CFD4ED',
        'primary-color-0': '#F1F3FF',

        'secondary-color-5': '#3D7B3F',
        'secondary-color-4': '#5CB85F',
        'secondary-color-3': '#92D094',
        'secondary-color-2': '#C9E7CA',
        'secondary-color-1': '#DEF1DF',

        'neutral-color-6': '#151515',
        'neutral-color-5': '#3C3C3C',
        'neutral-color-4': '#8A8A8A',
        'neutral-color-3': '#D0D0D0',
        'neutral-color-2': '#F1F3FF',
        'neutral-color-1': '#FFFFFF',

        'alert-warning-color': '#F9CC00',
        'alert-danger-color': '#FA2C5A',
        'alert-success-color': '#73CA5C',
      },
    },
  },
  plugins: [],
};
