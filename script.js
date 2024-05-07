const acceptCookiesButton = document.querySelector('#accept-cookies-button');
const lgpdDiv = document.querySelector('.lgpd');
const timerText = document.querySelector('#tempo-restante');
const timerText2 = document.querySelector('#tempo-restante-2');

function onAcceptCookiesButtonClick() {
  lgpdDiv.remove();
};

function createTimer() {
  if(!localStorage.getItem('countDownDate')) {
    const initialTimer = new Date();
    const finishTimer = new Date();
    finishTimer.setDate(initialTimer.getDate() + 1);
    localStorage.setItem('countDownDate', finishTimer);
  }

  const finishTimer = Date.parse(localStorage.getItem('countDownDate'));
  const currentTime = new Date();

  const distance = finishTimer - currentTime.getTime();

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (hours <= 0 && minutes <= 0 && seconds <= 0) {
    timerText.innerHTML = '0h 0m 0s - tempo esgotado';
    timerText2.innerHTML = '0h 0m 0s - tempo esgotado';
  }
  else {
    timerText.innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's';
    timerText2.innerHTML = hours + 'h ' + minutes + 'm ' + seconds + 's';
  }
}

window.onload = function onloadWindow() {
  acceptCookiesButton.addEventListener('click', onAcceptCookiesButtonClick);
  setInterval(createTimer, 1000);
};
