document.addEventListener('DOMContentLoaded', () => {

  var transformValue = 200;

  var ourClientsContainer = document.querySelector('.our-clients');
  var carousel = document.querySelector('.carousel');
  var rightScroll = document.querySelector('.scroll-right');
  var leftScroll = document.querySelector('.scroll-left');
  var clientsLogosContainer = document.querySelector('.clients-logos-container');

  function getLogosTranslateX() {
    let matrixOfTransform = getComputedStyle(clientsLogosContainer).transform;
    return Number(matrixOfTransform.slice(19, matrixOfTransform.length - 4));
  }

  ourClientsContainer.addEventListener('click', event => {
    if (event.target == leftScroll) {

    }
    else if (event.target == rightScroll) {

    }
  })

  window.addEventListener('resize', () => {

  });

});
