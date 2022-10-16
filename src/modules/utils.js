export function generateRandomId() {
  return new Date().getTime();
}

export function generateDate() {
  return new Date().toLocaleDateString();
}

function clockUpdate() {
  let clock = document.querySelector('.clock');
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;
}

export function clockStart() {
  let clockId = setInterval(clockUpdate, 5000);
  clockUpdate();
}

