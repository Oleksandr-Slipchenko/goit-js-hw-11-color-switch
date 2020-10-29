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
  constructor() {
  this.intervalId = null;
  }

  start() {
    refs.startBtn.disabled = 'true';
    this.intervalId = setInterval(() => {
      console.log('start'); // чтобы видеть работу кнопки
      const min = 0;
      const max = colors.length - 1;
      refs.bodyHtml.style.backgroundColor = randomIntegerFromInterval(min, max)
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    refs.startBtn.disabled = 'false';
    // refs.bodyHtml.style.backgroundColor = '';
    console.log('stop'); // чтобы видеть работу кнопки
  }
};

const changer = new Changer({

})

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  bodyHtml: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', changer.start);
refs.stopBtn.addEventListener('click', changer.stop);


// Черновик

// const backgroundChanger = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }

//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       console.log('start'); // чтобы видеть работу кнопки
//       const min = 0;
//       const max = colors.length - 1;
//       refs.bodyHtml.style.backgroundColor = randomIntegerFromInterval(min, max)
//     }, 1000);
//   },

//   stop() {
//     console.log('stop'); // чтобы видеть работу кнопки
//     clearInterval(this.intervalId);
//   },
// };