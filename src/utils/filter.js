const numeral = require("numeral");

const dolarFilter = value => {
  return value ? numeral(value).format("($ 0.00a)") : "$ 0";
};
const percentFilter = value => {
  return value ? `${Number(value).toFixed(2)}%` : "0%";
};

export { dolarFilter,percentFilter };
