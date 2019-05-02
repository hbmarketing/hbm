document.addEventListener('DOMContentLoaded', () => {

  var transformValue = 200;

  var ourClientsContainer = document.querySelector('.our-clients');
  var carousel = document.querySelector('.carousel');
  var rightScroll = document.querySelector('.scroll-right');
  var leftScroll = document.querySelector('.scroll-left');
  var clientsLogosContainer = document.querySelector('.clients-logos-container');
  var carouselAngleLeft = document.querySelector('.fa-chevron-left');
  var carouselAngleRight = document.querySelector('.fa-chevron-right');

  setAnglesDisplay();

  function getLogosTranslateX() {
    let matrixOfTransform = getComputedStyle(clientsLogosContainer).transform;
    return Number(matrixOfTransform.slice(19, matrixOfTransform.length - 4));
  }

  function setAnglesDisplay() {
    if (carousel.offsetWidth > clientsLogosContainer.offsetWidth) {
      rightScroll.style.display = 'none';
      leftScroll.style.display = 'none';
    }
    else {
      rightScroll.style.display = 'block';
      leftScroll.style.display = 'block';
    }
  }

  ourClientsContainer.addEventListener('click', event => {
    if (carousel.offsetWidth < clientsLogosContainer.offsetWidth) {
      let translater;
      if (event.target == carouselAngleRight) {
        if (Math.abs(getLogosTranslateX()) < (clientsLogosContainer.offsetWidth - carousel.clientWidth)) {
          translater = Math.abs(getLogosTranslateX()) + (transformValue - ((Math.abs(getLogosTranslateX()) + carousel.clientWidth) % transformValue));
          clientsLogosContainer.style.transform = 'translateX(-' + translater + 'px)';
        }
      }
      else if (event.target == carouselAngleLeft) {
        if (transformValue - (transformValue - (Math.abs(getLogosTranslateX()) % transformValue))) {
          translater = Math.abs(getLogosTranslateX()) - (transformValue - (transformValue - (Math.abs(getLogosTranslateX()) % transformValue)));
        } else {
          translater = Math.abs(getLogosTranslateX()) - (transformValue - (Math.abs(getLogosTranslateX()) % transformValue));
        }
        clientsLogosContainer.style.transform = 'translateX(-' + translater + 'px)';
      }
    }
  })

  window.addEventListener('resize', () =>{
    setAnglesDisplay();
  })

});
