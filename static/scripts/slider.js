var imageNameNumber = 1;
var imageNameNumberMax = 1;
var imageNameNumberMin = 1;

document.addEventListener('DOMContentLoaded', () => {

  setMarketingkitsBackground()
  indicatorsColorChange()
  // xhrRequest()

  document.addEventListener('click', event => {

    if (event.target.className === 'fas fa-angle-left') {
      imageNameNumberDec()
      setMarketingkitsBackground()
      indicatorsColorChange()
      // xhrRequest()
    }
    else if (event.target.className === 'fas fa-angle-right') {
      imageNameNumberInc()
      setMarketingkitsBackground()
      indicatorsColorChange()
      // xhrRequest()
    }

  });

});

function imageNameNumberInc() {
  imageNameNumber++;
  if (imageNameNumber > imageNameNumberMax) imageNameNumber = imageNameNumberMin
}

function imageNameNumberDec() {
  imageNameNumber--;
  if (imageNameNumber < imageNameNumberMin) imageNameNumber = imageNameNumberMax
}

function setMarketingkitsBackground() {
  document.querySelector('.marketing-kit').style.background = '#000 url("static/slider-images/' + imageNameNumber + '.svg") center center no-repeat';
  document.querySelector('.marketing-kit').style.backgroundSize = '100%';
}

function indicatorsColorChange() {
  document.querySelectorAll('.fa-circle').forEach((element) => {
    element.style.color = 'white';
  })

  document.getElementById('indicator-' + imageNameNumber).style.color = 'red';
}

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
