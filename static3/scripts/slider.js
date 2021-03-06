var imageNameNumber = 1;
var imageNameNumberMax = 2;
var imageNameNumberMin = 1;

document.addEventListener('DOMContentLoaded', () => {

  var marketingKit = document.querySelector('.marketing-kit');
  var headOffsetHeight = document.querySelector('.head').offsetHeight;

  var vhForHeader = document.documentElement.clientHeight / 100;
  marketingKit.style.height = ((document.documentElement.clientHeight - headOffsetHeight) / vhForHeader) + 'vh';

  indicatorsColorChange()
  setAnglesColor()
  setUtpTextAndColor()
  // xhrRequest()

  window.addEventListener('resize', () => {
    translateMarketingkitsBackground()
    vhForHeader = document.documentElement.clientHeight / 100;
    marketingKit.style.height = ((document.documentElement.clientHeight - headOffsetHeight) / vhForHeader) + 'vh';
  })

  marketingKit.addEventListener('click', event => {

    if (event.target.className === 'fas fa-angle-left') {
      if (imageNameNumberDec()) {
        translateMarketingkitsBackground()
        indicatorsColorChange()
        setAnglesColor()
        setUtpTextAndColor()
        // xhrRequest()
      }
    }
    else if (event.target.className === 'fas fa-angle-right') {
      if (imageNameNumberInc()) {
        translateMarketingkitsBackground()
        indicatorsColorChange()
        setAnglesColor()
        setUtpTextAndColor()
        // xhrRequest()
      }
    }
    else if (event.target.className === 'kit-info-transformer-0') {
      // translateKitInfo(true)
    }
    else if (event.target.className === 'kit-info-transformer-100') {
      // translateKitInfo(false)
    }
  });

});

function setUtpTextAndColor() {
  let current = document.querySelector('#indicator-' + imageNameNumber);
  document.querySelector('.about-kit-text').innerHTML = current.dataset.utp;
  document.querySelector('.info-about-kit').style.color =  current.dataset.color;
}

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

// function translateKitInfo(property) {

//   if (property) {
//     document.querySelector('.kit').style.transform = 'translateX(0)';
//     document.body.style.overflow = 'hidden';
//   }
//   else {
//     document.querySelector('.kit').style.transform = 'translateX(-100%)';
//     document.body.style.overflow = 'auto';
//     document.body.style.overflowX = 'hidden';
//   }

// }

// function xhrRequest() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', '/kit');
//   xhr.onload = () => {
//     if (document.querySelector('.chapter')) document.querySelectorAll('.chapter').forEach(elem => {elem.remove()})
//     const content = JSON.parse(xhr.responseText)
//     content.forEach(chapter => {
//       const divChapter =  document.createElement('div');
//       divChapter.className = 'chapter';
//       chapter.forEach(info => {
//         const element = document.createElement(info.createElement);
//         element.className = info.className;
//         element.innerHTML = info.innerHTML;
//         divChapter.append(element);
//       });
//       document.querySelector('.kit').append(divChapter);
//     });
//   };
//   const data = new FormData();
//   data.append('number', imageNameNumber);
//   xhr.send(data);
// }
