document.addEventListener('DOMContentLoaded', () => {
  var headForScroll = document.querySelector('.head');

  var firstOfNavLinks = document.querySelector('.one');
  var secondOfNavLinks = document.querySelector('.two');
  var thirdOfNavLinks = document.querySelector('.three');
  var firstOfNavLinks2 = document.querySelector('.one2');
  var secondOfNavLinks2 = document.querySelector('.two2');
  var thirdOfNavLinks2 = document.querySelector('.three2');

  var firstOfNavTargets = document.querySelector('.marketing-kit');
  var secondOfNavTargets = document.querySelector('.about-company');
  var thirdOfNavTargets = document.querySelector('.our-clients');

  document.addEventListener('click', event => {
    if (event.target == firstOfNavLinks || event.target == firstOfNavLinks2) {
      window.scrollTo(0, firstOfNavTargets.getBoundingClientRect().top + pageYOffset - headForScroll.offsetHeight);
    }
    else if (event.target == secondOfNavLinks || event.target == secondOfNavLinks2) {
      window.scrollTo(0, secondOfNavTargets.getBoundingClientRect().top + pageYOffset - headForScroll.offsetHeight);
    }
    else if (event.target == thirdOfNavLinks || event.target == thirdOfNavLinks2) {
      window.scrollTo(0, thirdOfNavTargets.getBoundingClientRect().top + pageYOffset - headForScroll.offsetHeight);
    }
  });


});
