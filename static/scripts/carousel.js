document.addEventListener('DOMContentLoaded', () => {

  var maxNumberOfLogos = 6;
  var qurrentImageNum = 0;
  var imageWidthValue = 250;

  var ourClientsContainer = document.querySelector('.our-clients');
  var carousel = document.querySelector('.carousel');
  var rightScroll = document.querySelector('.scroll-right');
  var leftScroll = document.querySelector('.scroll-left');

  carousel.style.width = (document.body.clientWidth - rightScroll.offsetWidth - leftScroll.offsetWidth) + 'px';
  var carouselClientWidth = carousel.clientWidth;
  var objInCarousel = Math.floor(carouselClientWidth / imageWidthValue);
  var previousNumObjInCarousel = objInCarousel;

  firstImagesLoad();

  ourClientsContainer.addEventListener('click', event => {
    if (event.target == leftScroll) {
      rightLeftScroll(false);
    }
    else if (event.target == rightScroll) {
      rightLeftScroll(true);
    }
  })

  window.addEventListener('resize', () => {
    carousel.style.width = (document.body.clientWidth - rightScroll.offsetWidth - leftScroll.offsetWidth) + 'px';
    carouselClientWidth = carousel.clientWidth;
    objInCarousel = Math.floor(carouselClientWidth / imageWidthValue);
    if (objInCarousel != previousNumObjInCarousel) changesAfterResize();
    previousNumObjInCarousel = objInCarousel;
  });

  function createNewImage(imageNum, isAppend=true) {
    let altAndTitle = getAltAndTitle(imageNum);

    let newDiv = document.createElement('div');
    let newImg = document.createElement('img');

    newImg.setAttribute('src', 'static/clients-logos/' + imageNum + '.png');
    newImg.setAttribute('alt', altAndTitle);
    newImg.setAttribute('title', altAndTitle);

    newDiv.append(newImg);
    if (isAppend) {
      carousel.append(newDiv);
    }
    else {
      carousel.insertBefore(newDiv, carousel.firstChild);
    }
  }

  function firstImagesLoad() {
    for (let i = 0; i < objInCarousel; i++) {
      createNewImage(qurrentImageNum);
      if ((++qurrentImageNum) > maxNumberOfLogos) qurrentImageNum = 0;
    }
  }

  function changesAfterResize() {
    let odds;
    if (objInCarousel > previousNumObjInCarousel) {
      odds = objInCarousel - previousNumObjInCarousel;
      for (let i = 0; i < odds; i++) {
        createNewImage(qurrentImageNum);
        if ((++qurrentImageNum) > maxNumberOfLogos) qurrentImageNum = 0;
      }
    }
    else if (objInCarousel < previousNumObjInCarousel) {
      odds = previousNumObjInCarousel - objInCarousel;
      for (let i = 0; i < odds; i++) {
        carousel.removeChild(carousel.lastChild);
        if ((--qurrentImageNum) < 0) qurrentImageNum = maxNumberOfLogos;
      }
    }
  }

  function getAltAndTitle(imgNum) {
    let forReturn;

    switch (imgNum) {
      case 0:
        forReturn = "Rim Group";
        break;
      case 1:
        forReturn = "IrsKom";
        break;
      case 2:
        forReturn = "Grozny Travel";
        break;
      case 3:
        forReturn = "DIAMANT";
        break;
      case 4:
        forReturn = "IQ007";
        break;
      case 5:
        forReturn = "Valensia";
        break;
      case 6:
        forReturn = "Intellect PRO";
        break;
      default:
        forReturn = "";
    }

    return forReturn;
  }

  function rightLeftScroll(increase) {
    if (increase) {
      carousel.removeChild(carousel.firstChild);
      createNewImage(qurrentImageNum);
      if ((++qurrentImageNum) > maxNumberOfLogos) qurrentImageNum = 0;
    }
    else {
      let aqurrentImageNum = qurrentImageNum;
      for (var i = 0; i < objInCarousel + 1; i++) {
        if ((--aqurrentImageNum) < 0) aqurrentImageNum = maxNumberOfLogos;
      }
      carousel.removeChild(carousel.lastChild);
      createNewImage(aqurrentImageNum, false);
      if ((--qurrentImageNum) < 0) qurrentImageNum = maxNumberOfLogos;
    }
  }

});
