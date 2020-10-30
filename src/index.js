// import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// Рандомный выбор цвета

const randomIntegerFromInterval = (min, max) => {
  return colors[Math.floor(Math.random() * (max - min + 1) + min)];
};

// // Работа кнопок Start, Stop

class Changer {
  constructor({ colors, refs }) {
    this.refs = refs;
    this.colors = colors;
    this.intervalId = null;
  }

  start() {
    refs.startBtn.disabled = true;
    this.intervalId = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      refs.bodyHtml.style.backgroundColor = randomIntegerFromInterval(min, max)
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    refs.startBtn.disabled = false;
  }
};

const changer = new Changer({
})

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  bodyHtml: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', () => changer.start());
refs.stopBtn.addEventListener('click', () => changer.stop());
