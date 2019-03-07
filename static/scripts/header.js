document.addEventListener('DOMContentLoaded', () => {
  var burger = document.querySelector('.icon-burger');
  var close = document.querySelector('.icon-close');
  var head = document.querySelector('.head');
  var nav2 = document.querySelector('.nav2');

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
    if (document.body.clientWidth >= 720) {
      burger.style.display = 'none';
      close.style.display = 'none';
      nav2.style.right = '-100%';
    }
    else if (document.body.clientWidth < 720) {
      burger.style.display = 'block';
    }
  })
})
