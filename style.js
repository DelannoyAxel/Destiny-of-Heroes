const startButton = document.querySelector('.startButton');
const imgIop = document.querySelector('.imgIop')
const imgCra = document.querySelector('.imgCra')
const imgXel = document.querySelector('.imgXel')
const imgEni = document.querySelector('.imgEni')
const pageAccueil = document.querySelector ('.pageAccueil');
const pageSelection1 = document.querySelector ('.pageSelection1')
const tuto = document.querySelector('.tuto');
const modal = document.querySelector('.modal');
const buttonSelectP2 = document.querySelector ('.buttonSelectP2')
const pageSelection2 = document.querySelector ('.pageSelection2')
const imgIop2 = document.querySelector('.imgIop2');
const imgCra2 = document.querySelector('.imgCra2');
const imgXel2 = document.querySelector('.imgXel2');
const imgEni2 = document.querySelector('.imgEni2');
const startGameButton = document.querySelector ('.buttonStartGame')
const phaseDeCombat = document.querySelector ('.phaseDeCombat')




startButton.addEventListener ('click', ()=> {
    pageAccueil.style.display = "none"
    pageSelection1.style.display = "flex"
});

tuto.addEventListener('click', () => {
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
});

// cet effet permet au iop de s'agrandire et rétrécire au passage de la souris 
imgIop.addEventListener ('mouseenter', () => {
    imgIop.style.transition = 'transform 0.3s ease-in-out';
    imgIop.style.transform = 'scale(1.2)';
    imgIop.style.cursor = 'pointer';
});

imgIop.addEventListener ('mouseleave',  () => {
    imgIop.style.transition = 'transform 0.3s ease-in-out'
    imgIop.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgIop.addEventListener ('click', () => {
    imgIop.style.border = '3px solid white';
    imgCra.style.border = 'none';
    imgXel.style.border = 'none';
    imgEni.style.border = 'none';
});
// cet effet permet au cra de s'agrandire et rétrécire au passage de la souris 
imgCra.addEventListener ('mouseenter', () => {
    imgCra.style.transition = 'transform 0.3s ease-in-out';
    imgCra.style.transform = 'scale(1.2)';
    imgCra.style.cursor = 'pointer';
});

imgCra.addEventListener ('mouseleave',  () => {
    imgCra.style.transition = 'transform 0.3s ease-in-out'
    imgCra.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgCra.addEventListener ('click', () => {
    imgCra.style.border = '3px solid white';
    imgIop.style.border = 'none';
    imgXel.style.border = 'none';
    imgEni.style.border = 'none';
    
});

// cet effet permet au xel de s'agrandire et rétrécire au passage de la souris 
imgXel.addEventListener ('mouseenter', () => {
    imgXel.style.transition = 'transform 0.3s ease-in-out';
    imgXel.style.transform = 'scale(1.2)';
    imgXel.style.cursor = 'pointer';
});

imgXel.addEventListener ('mouseleave',  () => {
    imgXel.style.transition = 'transform 0.3s ease-in-out'
    imgXel.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgXel.addEventListener ('click', () => {
    imgXel.style.border = '3px solid white';
    imgCra.style.border = 'none';
    imgIop.style.border = 'none';
    imgEni.style.border = 'none';
    
});

// cet effet permet au eni de s'agrandire et rétrécire au passage de la souris 
imgEni.addEventListener ('mouseenter', () => {
    imgEni.style.transition = 'transform 0.3s ease-in-out';
    imgEni.style.transform = 'scale(1.2)';
    imgEni.style.cursor = 'pointer';
});

imgEni.addEventListener ('mouseleave',  () => {
    imgEni.style.transition = 'transform 0.3s ease-in-out'
    imgEni.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgEni.addEventListener ('click', () => {
    imgEni.style.border = '3px solid white';
    imgCra.style.border = 'none';
    imgXel.style.border = 'none';
    imgIop.style.border = 'none';
    
});


// Réinitialiser choixJ1 lors du passage au joueur 2
buttonSelectP2.addEventListener('click', () => {
    // Vérification si le joueur 1 a fait son choix de classe
    if (choixJ1 === false) {
        alert("Le joueur 1 doit choisir une classe avant de continuer.");
        return; 
    }
    else{
    pageAccueil.style.display = "none";
    pageSelection1.style.display = 'none';
    pageSelection2.style.display = 'flex';
    }
});



// cet effet permet au iop de s'agrandire et rétrécire au passage de la souris 
imgIop2.addEventListener ('mouseenter', () => {
    imgIop2.style.transition = 'transform 0.3s ease-in-out';
    imgIop2.style.transform = 'scale(1.2)';
    imgIop2.style.cursor = 'pointer';
});

imgIop2.addEventListener ('mouseleave',  () => {
    imgIop2.style.transition = 'transform 0.3s ease-in-out'
    imgIop2.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgIop2.addEventListener ('click', () => {
    imgIop2.style.border = '3px solid white';
    imgCra2.style.border = 'none';
    imgXel2.style.border = 'none';
    imgEni2.style.border = 'none';
});
// cet effet permet au cra de s'agrandire et rétrécire au passage de la souris 
imgCra2.addEventListener ('mouseenter', () => {
    imgCra2.style.transition = 'transform 0.3s ease-in-out';
    imgCra2.style.transform = 'scale(1.2)';
    imgCra2.style.cursor = 'pointer';
});

imgCra2.addEventListener ('mouseleave',  () => {
    imgCra2.style.transition = 'transform 0.3s ease-in-out'
    imgCra2.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgCra2.addEventListener ('click', () => {
    imgCra2.style.border = '3px solid white';
    imgIop2.style.border = 'none';
    imgXel2.style.border = 'none';
    imgEni2.style.border = 'none';
    
});

// cet effet permet au xel de s'agrandire et rétrécire au passage de la souris 
imgXel2.addEventListener ('mouseenter', () => {
    imgXel2.style.transition = 'transform 0.3s ease-in-out';
    imgXel2.style.transform = 'scale(1.2)';
    imgXel2.style.cursor = 'pointer';
});

imgXel2.addEventListener ('mouseleave',  () => {
    imgXel2.style.transition = 'transform 0.3s ease-in-out'
    imgXel2.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgXel2.addEventListener ('click', () => {
    imgXel2.style.border = '3px solid white';
    imgCra2.style.border = 'none';
    imgIop2.style.border = 'none';
    imgEni2.style.border = 'none';
    
});

// cet effet permet au eni de s'agrandire et rétrécire au passage de la souris 
imgEni2.addEventListener ('mouseenter', () => {
    imgEni2.style.transition = 'transform 0.3s ease-in-out';
    imgEni2.style.transform = 'scale(1.2)';
    imgEni2.style.cursor = 'pointer';
});

imgEni2.addEventListener ('mouseleave',  () => {
    imgEni2.style.transition = 'transform 0.3s ease-in-out'
    imgEni2.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgEni2.addEventListener ('click', () => {
    imgEni2.style.border = '3px solid white';
    imgCra2.style.border = 'none';
    imgXel2.style.border = 'none';
    imgIop2.style.border = 'none';
});

    startGameButton.addEventListener ('click', () => {
    pageSelection2.style.display = 'none';
        phaseDeCombat.style.display = 'flex';    
    });

const tabClasse1 = [
    {
        nom: "Iop",
        pointDeVie: 280,
        Fureur: -65,
    },
    {
        nom: "Cra",
        pointDeVie: 330,
        flechePunitive: -50,
    },
    {
        nom: "Xel",
        pointDeVie: 290,
        Zaapi: -60,
    },
    {
        nom: "Eni",
        pointDeVie: 270,
        alchimie: -68
    }
];

choixJ1 = tabClasse1

switch (choixJ1) {
  case 0:
    [tabClass1[0]]
    break;
  case 1:
    [tabClass1[1]]
    break;
  case 2:
    [tabClass1[2]]
    break;
  case 3:
    [tabClass1[3]]
    break;
}
