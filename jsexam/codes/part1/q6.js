
const number = [170, 50, 30];
console.log(number.reduce(myFunc));

function myFunc(total, num) {
  return total + num;
}