module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ['Space Mono', 'monospace'],
      },
      colors: {
        strongCyan: 'hsl(172, 67%, 45%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        darkGrayishCyan: 'hsl(186, 14%, 43%)',
        grayishCyan: 'hsl(184, 14%, 56%)',
        lightGrayishCyan: 'hsl(185, 41%, 84%)',
        veryLightGrayishCyan: 'hsl(189, 41%, 97%)',
        whiteClr: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
