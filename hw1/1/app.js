const enterPassword = 'Введите пароль';
const CANCEL = 'Отменено пользователем!';
const correctPassword = 'Добро пожаловать!';
const uncorrectPassword = 'Доступ запрещен, неверный пароль!';
const ADMIN_PASSWORD = 'm4ng0h4ckz';
const message = prompt(enterPassword, 0);

if (message === null) {
  alert(CANCEL);
} else if (message === ADMIN_PASSWORD) {
  alert(correctPassword);
} else {
  alert(uncorrectPassword);
}
