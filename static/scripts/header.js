document.addEventListener('DOMContentLoaded', () => {
  var header = document.querySelector('header');
  var burger = document.querySelector('.icon-burger');
  var close = document.querySelector('.icon-close');
  var head = document.querySelector('.head');
  var nav2 = document.querySelector('.nav2');
  var navItem = document.querySelector('.nav-item');

  var vh = document.documentElement.clientHeight / 100;
  header.style.height = ((document.documentElement.clientHeight - head.clientHeight) / vh) + 'vh';
  // head.style.width = (document.documentElement.clientWidth - 30) + 'px';

  head.addEventListener('click', event => {
    if (event.target == burger) {
      burger.style.display = 'none';
      close.style.display = 'block';
      nav2.style.transform = 'translateX(0px)';
    }
    else if (event.target == close) {
      close.style.display = 'none';
      burger.style.display = 'block';
      nav2.style.transform = 'translateX(1000%)';
    }
  });

  window.addEventListener('resize', () => {
    vh = document.documentElement.clientHeight / 100;
    header.style.height = ((document.documentElement.clientHeight - head.clientHeight) / vh) + 'vh';
    // head.style.width = (document.documentElement.clientWidth - 30) + 'px';

    if (getComputedStyle(navItem).display == 'block') {
      burger.style.display = 'none';
      close.style.display = 'none';
      nav2.style.transform = 'translateX(1000%)';
    }
    else if (getComputedStyle(navItem).display == 'none' && getComputedStyle(close).display == 'none') {
      burger.style.display = 'block';
    }
  })
})
