const acceptCookiesButton = document.querySelector('#accept-cookies-button');
const lgpdDiv = document.querySelector('.lgpd');

function onAcceptCookiesButtonClick() {
  lgpdDiv.remove();
};

window.onload = function onloadWindow() {
  acceptCookiesButton.addEventListener('click', onAcceptCookiesButtonClick);
};