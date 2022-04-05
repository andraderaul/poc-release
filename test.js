const m = require(".");

test("add", () => {
  expect(m.add(1, 2)).toEqual(3);
});

test("sub", () => {
  expect(m.sub(1, 2)).toEqual(-1);
});

test("mult", () => {
  expect(m.mult(1, 2)).toEqual(2);
});

test("div", () => {
  expect(m.div(1, 2)).toEqual(0.5);
  expect(() => m.div(1, 0)).toThrowError("Divisão por 0 não pode ser feita");
});
