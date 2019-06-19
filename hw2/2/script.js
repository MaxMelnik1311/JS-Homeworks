const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
const message = prompt('Введите пароль!');

while (attemptsLeft !== 1) {
  if (message === null) {
    alert('Отменено пользователем!');
    break;
  }
  if (passwords.includes(message)) {
    alert('Добро пожаловать!');
    break;
  } else {
    attemptsLeft -= 1;
    alert(prompt(`Неверно введен пароль, у вас осталось ${attemptsLeft} попыток`));
    if (attemptsLeft == 1) {
      alert('Аккаунт заблокирован!');
    }
  }
}
