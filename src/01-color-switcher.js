// Funkcja do generowania losowego koloru
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Wybieranie obu przycisków i powiązanie ich z elementami HTML
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let timeoutId = null;

// Funkcja do rozpoczęcia zmiany koloru tła co sekundę, 1000ms
function startChangingBackgroundColor() {
  buttonStart.disabled = true;
  buttonStop.disabled = false;

  // Przypisanie ID timeout do zmiennej `timeoutId`
  timeoutId = setTimeout(function changeColor() {
    document.body.style.backgroundColor = getRandomHexColor();
    timeoutId = setTimeout(changeColor, 1000);
  }, 1000);
}

// Funkcja do zatrzymania zmiany koloru tła
function stopChangingBackgroundColor() {
  clearTimeout(timeoutId);

  buttonStart.disabled = false;
  buttonStop.disabled = true;
}
buttonStart.addEventListener('click', startChangingBackgroundColor);
buttonStop.addEventListener('click', stopChangingBackgroundColor);
