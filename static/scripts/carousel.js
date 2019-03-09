document.addEventListener('DOMContentLoaded', () => {

  var transformValue = 200;

  var ourClientsContainer = document.querySelector('.our-clients');
  var carousel = document.querySelector('.carousel');
  var rightScroll = document.querySelector('.scroll-right');
  var leftScroll = document.querySelector('.scroll-left');
  var clientsLogosContainer = document.querySelector('.clients-logos-container');

  ourClientsContainer.addEventListener('click', event => {
    if (event.target == leftScroll) {

    }
    else if (event.target == rightScroll) {

    }
  })

  window.addEventListener('resize', () => {

  });

});
