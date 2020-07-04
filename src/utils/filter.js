const numeral = require("numeral");

const dolarFilter = (value) => {
  console.log('===============f=====================');
  console.log(value);
  console.log('====================================');
  return value ? numeral(value).format("$0.00") : "$ 0";
};
const percentFilter = (value) => {
  
  return value ? `${Number(value).toFixed(2)}%` : "0%";
};

export { dolarFilter, percentFilter };
