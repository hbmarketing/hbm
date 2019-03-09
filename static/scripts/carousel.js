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
    if (carousel.offsetWidth < clientsLogosContainer.offsetWidth) {
      let translater;
      if (event.target == rightScroll) {
        translater = Math.abs(getLogosTranslateX()) + (transformValue - ((Math.abs(getLogosTranslateX()) + carousel.clientWidth) % transformValue));
        clientsLogosContainer.style.transform = 'translateX(-' + translater + 'px)';
      }
      else if (event.target == leftScroll) {
        if (transformValue - (transformValue - (Math.abs(getLogosTranslateX()) % transformValue))) {
          translater = Math.abs(getLogosTranslateX()) - (transformValue - (transformValue - (Math.abs(getLogosTranslateX()) % transformValue)));
        } else {
          translater = Math.abs(getLogosTranslateX()) - (transformValue - (Math.abs(getLogosTranslateX()) % transformValue));
        }
        clientsLogosContainer.style.transform = 'translateX(-' + translater + 'px)';
      }
    }
  })

  window.addEventListener('resize', () => {

  });

});
