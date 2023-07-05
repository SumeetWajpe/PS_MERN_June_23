function Add(x, y) {
  return x + y;
}

function Multiply(x, y) {
  return x * y;
}

module.exports.Addition = Add; // common js (export)
module.exports.Multiply = Multiply;
