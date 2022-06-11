function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function mult2(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw "Divisão por 0 não pode ser feita";
  }
  return a / b;
}
function breakchange(a) {
  console.log(a);
  console.log(a);
}

module.exports = {
  add,
  sub,
  mult,
  div,
  breakchange,
};
