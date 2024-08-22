const PI = Math.PI;

function circleArea(radiusLength) {
  if (radiusLength <= 0) {
    return "Radius must be greater than zero";
  }
  return PI * Math.pow(radiusLength, 2);
}
function squareArea(sideLength) {
  if (sideLength <= 0) {
    return "Side length must be greater than zero";
  }
  return Math.pow(sideLength, 2);
}

module.exports = {
  circleArea,
  squareArea,
};
