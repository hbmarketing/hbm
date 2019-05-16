document.addEventListener('DOMContentLoaded', () => {

    var aboutView = document.getElementById('about-view');

    aboutView.checked = false;

    document.querySelector('.about-us-title a'). addEventListener('click', (event) => {
        event.target.style.transform = event.target.style.transform == 'rotate(180deg)' ? 'rotate(0)' : 'rotate(180deg)';
        event.preventDefault();
        aboutView.checked = aboutView.checked ? false : true;
    })
})