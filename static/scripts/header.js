document.addEventListener('DOMContentLoaded', () => {
  var header = document.querySelector('header');
  var burger = document.querySelector('.icon-burger');
  var close = document.querySelector('.icon-close');
  var head = document.querySelector('.head');
  var nav2 = document.querySelector('.nav2');
  var navItem = document.querySelector('.nav-item');

  var vh = document.documentElement.clientHeight / 100;
  header.style.height = ((document.documentElement.clientHeight - head.clientHeight) / vh) + 'vh';

  function nav2Animate(first, second) {
    nav2.animate(
      [
        {right: first},
        {right: second}
      ],
      {
        duration: 100,
        easing: "linear",
        fill: "forwards",
      }
    );
  }

  burger.onclick = () => {
    burger.style.display = 'none';
    close.style.display = 'block';
    nav2Animate('-100%', '0');
  }
  close.onclick = () => {
    close.style.display = 'none';
    burger.style.display = 'block';
    nav2Animate('0', '-100%');
  }

  window.addEventListener('resize', () => {
    vh = document.documentElement.clientHeight / 100;
    header.style.height = ((document.documentElement.clientHeight - head.clientHeight) / vh) + 'vh';

    if (getComputedStyle(navItem).display == 'block') {
      burger.style.display = 'none';
      close.style.display = 'none';
    }
    else if (getComputedStyle(navItem).display == 'none' && getComputedStyle(close).display == 'none') {
      burger.style.display = 'block';
    }
  })
})
