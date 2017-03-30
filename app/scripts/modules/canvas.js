export const CANVAS = document.getElementById('grid_canvas');
export const CONTEXT = CANVAS.getContext('2d');

function cx(x) {
  return CANVAS.width * x;
}

function cy(y) {
  return CANVAS.height * y;
}

export function moveTo(x, y) {
  CONTEXT.moveTo(cx(x), cy(y));
}

export function drawLine(x, y) {
  CONTEXT.lineTo(cx(x), cy(y));
  CONTEXT.stroke();
}

export function drawTable(rows, columns) {
  const rowSize = 1.0 / rows;
  const rowMargin = 0.025;

  for (let row = 1; row < rows; row += 1) {
    const rowHeight = row * rowSize;
    moveTo(rowMargin, rowHeight);
    drawLine(1.0 - rowMargin, rowHeight);
  }

  const columnSize = 1.0 / columns;
  const columnMargin = 0.025;

  for (let column = 1; column < columns; column += 1) {
    const columnWidth = column * columnSize;
    moveTo(columnWidth, columnMargin);
    drawLine(columnWidth, 1.0 - columnMargin);
  }
}
