document.addEventListener('DOMContentLoaded', () => {
  var headForScroll = document.querySelector('.head');

  var firstOfNavLinks = document.querySelector('.one');
  var secondOfNavLinks = document.querySelector('.two');
  var thirdOfNavLinks = document.querySelector('.three');

  var firstOfNavTargets = document.querySelector('.marketing-kit');
  var secondOfNavTargets = document.querySelector('.about-company');
  var thirdOfNavTargets = document.querySelector('.our-clients');

  document.addEventListener('click', event => {
    if (event.target == firstOfNavLinks) {
      window.scrollTo(0, firstOfNavTargets.getBoundingClientRect().top + pageYOffset - headForScroll.offsetHeight);
    }
    else if (event.target == secondOfNavLinks) {
      window.scrollTo(0, secondOfNavTargets.getBoundingClientRect().top + pageYOffset - headForScroll.offsetHeight);
    }
    else if (event.target == thirdOfNavLinks) {
      window.scrollTo(0, thirdOfNavTargets.getBoundingClientRect().top + pageYOffset - headForScroll.offsetHeight);
    }
  });


});
