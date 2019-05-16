var imageNameNumber = 1;
const imageNameNumberMax = 4;
const imageNameNumberMin = 1;

document.addEventListener('DOMContentLoaded', () => {

  var marketingKit = document.querySelector('.marketing-kit');

  indicatorsColorChange()
  setAnglesColor()

  window.addEventListener('resize', () => {
    translateMarketingkitsBackground()
  })

  marketingKit.addEventListener('click', event => {

    if (event.target.className === 'fas fa-angle-left') {
      if (imageNameNumberDec()) {
        translateMarketingkitsBackground()
        indicatorsColorChange()
        setAnglesColor()
      }
    }
    else if (event.target.className === 'fas fa-angle-right') {
      if (imageNameNumberInc()) {
        translateMarketingkitsBackground()
        indicatorsColorChange()
        setAnglesColor()
      }
    }
  });

});

function imageNameNumberInc() {
  if (imageNameNumber < imageNameNumberMax) {
    imageNameNumber++;
    return true;
  }
  return false;
}

function imageNameNumberDec() {
  if (imageNameNumber > imageNameNumberMin) {
    imageNameNumber--;
    return true;
  }
  return false;
}

function translateMarketingkitsBackground() {
  var marketingKit = document.querySelector('.marketing-kit');
  document.querySelector('.kit-images-container').style.transform = 'translateX(-' + ((marketingKit.clientWidth * imageNameNumber) - marketingKit.clientWidth) + 'px)';
}

function indicatorsColorChange() {
  document.querySelectorAll('.fa-circle').forEach((element) => {
    element.style.color = 'white';
  })

  document.getElementById('indicator-' + imageNameNumber).style.color = 'red';
}

function setAnglesColor() {
  document.querySelector('.to-left').style.color = 'white';
  document.querySelector('.to-right').style.color = 'white';
  if (imageNameNumber == imageNameNumberMin) {
    document.querySelector('.to-left').style.color = 'rgba(127, 127, 127, 0.7)';
  }
  else if (imageNameNumber == imageNameNumberMax) {
    document.querySelector('.to-right').style.color = 'rgba(127, 127, 127, 0.7)';
  }
}
