const chooseCountry = 'В какую страну Вы хотите заказать товар?';
const country = prompt(chooseCountry, 0);
const noDelivery = 'В вашей стране доставка не доступна';
const China = 'китай';
const SouthAmerica = 'южная америка';
const Australia = 'австралия';
const India = 'индия';
const Jamaica = 'ямайка';
switch (country.toLowerCase()) {
  case China:
    alert('Доставка в Китай будет стоить 100 кредитов');
    break;

  case SouthAmerica:
    alert('Доставка в Южную Америку будет стоить 250 кредитов');
    break;

  case Australia:
    alert('Доставка в Австалию будет стоить 170 кредитов');
    break;

  case India:
    alert('Доставка в Индию будет стоит 80 кредитов');
    break;

  case Jamaica:
    alert('Доставка в Ямайку будет стоить 120 кредитов');
    break;

  default:
    alert(noDelivery);
}
