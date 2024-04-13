// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'], // Путь к вашим компонентам, чтобы Tailwind мог оптимизировать CSS
  darkMode: false, // Включение темной темы
  theme: {
    extend: {
      lineHeight: {
        tight: '1.2',
      },
    }, // Дополнительная настройка темы
  },
  variants: {
    extend: {}, // Дополнительные варианты
  },
  plugins: [], // Плагины Tailwind CSS
};
