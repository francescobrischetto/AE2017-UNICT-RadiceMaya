import {} from './external/jquery';
// Import only bootstrap packages you need
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/affix';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/alert';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/button';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/carousel';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/collapse';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/dropdown';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/modal';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/scrollspy';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/tooltip';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/tab';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/transition';
// import {} from 'bootstrap-sass/assets/javascripts/bootstrap/popover';
// Or import everything
import {} from 'bootstrap-sass'; // eslint-disable-line import/imports-first

const CANVAS = document.getElementById('grid_canvas');
const CONTEXT = CANVAS.getContext('2d');

function cx(x) {
  return CANVAS.width * x;
}

function cy(y) {
  return CANVAS.height * y;
}

function updateCanvasSize(canvas) {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const canvasSize = width < height ? width * 0.6 : height * 0.6;
  canvas.width = canvasSize; // window.innerWidth * 0.5;
  canvas.height = canvasSize; // window.innerHeight * 0.5;
}

function drawLine(x, y) {
  CONTEXT.lineTo(cx(x), cy(y));
  CONTEXT.stroke();
}

function init() {
  updateCanvasSize(CANVAS);
  window.resize(updateCanvasSize(CANVAS));

  CONTEXT.beginPath();
  CONTEXT.moveTo(0, 0);

  drawLine(0.5, 0.5);
}

init();
