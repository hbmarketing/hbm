document.addEventListener('DOMContentLoaded', () => {
  var burger = document.querySelector('.icon-burger');
  var close = document.querySelector('.icon-close');

  burger.onclick = () => {
    burger.style.display = 'none';
    close.style.display = 'block';
  }
  close.onclick = () => {
    close.style.display = 'none';
    burger.style.display = 'block';
  }
})
