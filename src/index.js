// import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  bodyHtml: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', onStartChangeColors);

function onStartChangeColors() {
  refs.bodyHtml.style.backgroundColor = randomIntegerFromInterval(minIndex, maxIndex);
}

const arrayIndex = colors.map((color, index) => index);

const minIndex = Math.min.apply(null, arrayIndex);
const maxIndex = Math.max.apply(null, arrayIndex);

const randomIntegerFromInterval = (min, max) => {
  return colors[Math.floor(Math.random() * (max - min + 1) + min)];
};

// console.log(randomIntegerFromInterval(minIndex, maxIndex));
