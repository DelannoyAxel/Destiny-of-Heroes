const startButton = document.querySelector('.startButton');


startButton.addEventListener ('click', ()=> {
    const pageAccueil = document.querySelector ('.pageAccueil');
    pageAccueil.style.display = "none"

    const pageSelection = document.querySelector ('.pageSelection')
    pageSelection.style.display = "flex"
});

const tuto = document.querySelector('.tuto');
const modal = document.querySelector('.modal');

tuto.addEventListener('click', () => {
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
});


