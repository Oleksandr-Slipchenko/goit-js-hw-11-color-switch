// import './styles.css';

import {colors, refs} from './data.js';


// // Работа кнопок Start, Stop

class Changer {
  constructor({ colors, refs }) {
    this.refs = refs;
    this.colors = colors;
    this.intervalId = null;
  }

  // Рандомный выбор цвета

  randomIntegerFromInterval = (min, max) => {
  return colors[Math.floor(Math.random() * (max - min + 1) + min)];
};

  start() {
    refs.startBtn.disabled = true;
    this.intervalId = setInterval(() => {
      const min = 0;
      const max = colors.length - 1;
      refs.bodyHtml.style.backgroundColor = this.randomIntegerFromInterval(min, max)
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    refs.startBtn.disabled = false;
  }
};

const changer = new Changer({
})

refs.startBtn.addEventListener('click', () => changer.start());
refs.stopBtn.addEventListener('click', () => changer.stop());