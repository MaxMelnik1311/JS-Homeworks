const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const newLogin = prompt('Введите логин:');

function isValidLogin(newLogin) {
  return newLogin.length > 4 && newLogin.length < 16;
}

function isLoginUnique(newLogin, logins) {
  return logins.includes(newLogin);
}

function addLogin(newLogin, logins) {
  if (!isValidLogin(newLogin)) {
    return alert('Ошибка! Ваш логин должен быть более 4 и менее 16 символов!');
  }

  if (isLoginUnique(newLogin, logins)) {
    return alert('Такой логин уже занят, выберите новый!');
  }

  logins.push(newLogin);
  return alert('Ваш логин успешно добавлен!');
}

addLogin(newLogin, logins);
