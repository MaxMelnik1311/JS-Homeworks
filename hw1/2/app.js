const credits = 23580;
const pricePerDroid = 3000;
const enterNumber = `На вашем счету ${credits} кредитов. Один ремонтный дроид стоит ${pricePerDroid} кредитов. Сколько дроидов желаете заказать?`;
const cancel = 'Отменено пользователем!';
const notEnoughCredits = 'Недостаточно средств на счету!';
const message = prompt(enterNumber, 0);
const totalPrice = (message * pricePerDroid);
const creditsRest = (credits - (message * pricePerDroid));
const successfulOrder = `Вы купили ${message} дроидов, на счету осталось ${creditsRest} кредитов.`;

if (message === null) {
  alert(cancel);
} else if (creditsRest < 0) {
  alert(notEnoughCredits);
} else {
  alert(successfulOrder);
}
