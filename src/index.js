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

// Работа кнопок Start, Stop

const backgroundChanger = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      console.log('start'); // чтобы видеть работу кнопки
      refs.bodyHtml.style.backgroundColor = randomIntegerFromInterval(0, colors.length - 1)
    }, 1000);
  },

  stop() {
    console.log('stop'); // чтобы видеть работу кнопки
    clearInterval(this.intervalId);
  },
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  bodyHtml: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', backgroundChanger.start);
refs.stopBtn.addEventListener('click', backgroundChanger.stop);





// Черновик

// function onStartChangeColors() {
//   refs.bodyHtml.style.backgroundColor = randomIntegerFromInterval(minIndex, maxIndex);
  // const changerOfColors = setInterval(onStartChangeColors, 1000);
// }
// function onStopChangeColors() {
//   clearInterval(changerOfColors);
// }