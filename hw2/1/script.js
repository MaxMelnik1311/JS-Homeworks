let input;
const numbers = [];
let total = 0;

do {
  const input = prompt('Введите число:', 0);
  if (input === null) break;
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }
  numbers.push(Number(input));
} while (true);
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
alert(`Сумма введенных чисел = ${total}`);
