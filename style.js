const startButton = document.querySelector('.startButton');
const imgIop = document.querySelector('.imgIop')
const imgCra = document.querySelector('.imgCra')
const imgXel = document.querySelector('.imgXel')
const imgEni = document.querySelector('.imgEni')
const pageAccueil = document.querySelector('.pageAccueil');
const pageSelection1 = document.querySelector('.pageSelection1')
const tuto = document.querySelector('.tuto');
const modal = document.querySelector('.modal');
const buttonSelectP2 = document.querySelector('.buttonSelectP2')
const pageSelection2 = document.querySelector('.pageSelection2')
const imgIop2 = document.querySelector('.imgIop2');
const imgCra2 = document.querySelector('.imgCra2');
const imgXel2 = document.querySelector('.imgXel2');
const imgEni2 = document.querySelector('.imgEni2');
const startGameButton = document.querySelector('.buttonStartGame')
const phaseDeCombat = document.querySelector('.phaseDeCombat')
let choixJ1 = null;
let choixJ2 = null;

const tab = [
    {
        nom: "Iop",
        pointDeVie: 280,
        atk: -65,
    },
    {
        nom: "Cra",
        pointDeVie: 330,
        atk: -50,
    },
    {
        nom: "Xel",
        pointDeVie: 290,
        atk: -60,
    },
    {
        nom: "Eni",
        pointDeVie: 270,
        atk: -68
    }
];

switch (choixJ1) {
    case 0:
        tab[0];
        break;
    case 1:
        tab[1];
        break;
    case 2:
        tab[2];
        break;
    case 3:
        tab[3];
        break;
}

const tab2 = [...tab];

switch (choixJ2) {
    case 0:
        tab2[0];
        break;
    case 1:
        tab2[1];
        break;
    case 2:
        tab2[2];
        break;
    case 3:
        tab2[3];
        break;
}

const submitPlayer1 = document.getElementById('submitPlayer1');
const submitPlayer2 = document.getElementById('submitPlayer2');

const pseudoPlayer1 = document.getElementById('pseudoPlayer1');
const pseudoPlayer2 = document.getElementById('pseudoPlayer2');

const player1Name = document.querySelector('#combatP1 h2');
const player2Name = document.querySelector('#combatP2 h2');

submitPlayer1.addEventListener('click', () => {
    const playerName = pseudoPlayer1.value;
    player1Name.textContent = playerName;
});

submitPlayer2.addEventListener('click', () => {
    const playerName = pseudoPlayer2.value;
    player2Name.textContent = playerName;
});


startButton.addEventListener('click', () => {
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
imgIop.addEventListener('mouseenter', () => {
    imgIop.style.transition = 'transform 0.3s ease-in-out';
    imgIop.style.transform = 'scale(1.2)';
    imgIop.style.cursor = 'pointer';
});

imgIop.addEventListener('mouseleave', () => {
    imgIop.style.transition = 'transform 0.3s ease-in-out'
    imgIop.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgIop.addEventListener('click', () => {
    imgIop.style.border = '3px solid white';
    imgCra.style.border = 'none';
    imgXel.style.border = 'none';
    imgEni.style.border = 'none';
    choisirClasseJoueur1(0); // 0 correspond à l'indice de la classe "Iop" dans le tableau

});
// cet effet permet au cra de s'agrandire et rétrécire au passage de la souris 
imgCra.addEventListener('mouseenter', () => {
    imgCra.style.transition = 'transform 0.3s ease-in-out';
    imgCra.style.transform = 'scale(1.2)';
    imgCra.style.cursor = 'pointer';
});

imgCra.addEventListener('mouseleave', () => {
    imgCra.style.transition = 'transform 0.3s ease-in-out'
    imgCra.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgCra.addEventListener('click', () => {
    imgCra.style.border = '3px solid white';
    imgIop.style.border = 'none';
    imgXel.style.border = 'none';
    imgEni.style.border = 'none';
    choisirClasseJoueur1(1); // 1 correspond à l'indice de la classe "Cra" dans le tableau
});

// cet effet permet au xel de s'agrandire et rétrécire au passage de la souris 
imgXel.addEventListener('mouseenter', () => {
    imgXel.style.transition = 'transform 0.3s ease-in-out';
    imgXel.style.transform = 'scale(1.2)';
    imgXel.style.cursor = 'pointer';
});

imgXel.addEventListener('mouseleave', () => {
    imgXel.style.transition = 'transform 0.3s ease-in-out'
    imgXel.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgXel.addEventListener('click', () => {
    imgXel.style.border = '3px solid white';
    imgCra.style.border = 'none';
    imgIop.style.border = 'none';
    imgEni.style.border = 'none';
    choisirClasseJoueur1(2); // 2 correspond à l'indice de la classe "Xel" dans le tableau

});

// cet effet permet au eni de s'agrandire et rétrécire au passage de la souris 
imgEni.addEventListener('mouseenter', () => {
    imgEni.style.transition = 'transform 0.3s ease-in-out';
    imgEni.style.transform = 'scale(1.2)';
    imgEni.style.cursor = 'pointer';
});

imgEni.addEventListener('mouseleave', () => {
    imgEni.style.transition = 'transform 0.3s ease-in-out'
    imgEni.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgEni.addEventListener('click', () => {
    imgEni.style.border = '3px solid white';
    imgCra.style.border = 'none';
    imgXel.style.border = 'none';
    imgIop.style.border = 'none';
    choisirClasseJoueur1(3); // 3 correspond à l'indice de la classe "Eni" dans le tableau

});

// Gestionnaire d'événement pour choisir la classe du joueur 1
function choisirClasseJoueur1(index) {
    choixJ1 = tab[index];
}

buttonSelectP2.addEventListener('click', () => {
    if (choixJ1 == null) {
        alert("Le joueur 1 doit choisir une classe avant de continuer.");
    }
    else {
        console.log("Classe choisie par le joueur 1 :", choixJ1);
        pageAccueil.style.display = "none";
        pageSelection1.style.display = 'none';
        pageSelection2.style.display = 'flex';
    }
});

// cet effet permet au iop de s'agrandire et rétrécire au passage de la souris 
imgIop2.addEventListener('mouseenter', () => {
    imgIop2.style.transition = 'transform 0.3s ease-in-out';
    imgIop2.style.transform = 'scale(1.2)';
    imgIop2.style.cursor = 'pointer';
});

imgIop2.addEventListener('mouseleave', () => {
    imgIop2.style.transition = 'transform 0.3s ease-in-out'
    imgIop2.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgIop2.addEventListener('click', () => {
    imgIop2.style.border = '3px solid white';
    imgCra2.style.border = 'none';
    imgXel2.style.border = 'none';
    imgEni2.style.border = 'none';
    choisirClasseJoueur2(0);
});
// cet effet permet au cra de s'agrandire et rétrécire au passage de la souris 
imgCra2.addEventListener('mouseenter', () => {
    imgCra2.style.transition = 'transform 0.3s ease-in-out';
    imgCra2.style.transform = 'scale(1.2)';
    imgCra2.style.cursor = 'pointer';
});

imgCra2.addEventListener('mouseleave', () => {
    imgCra2.style.transition = 'transform 0.3s ease-in-out'
    imgCra2.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgCra2.addEventListener('click', () => {
    imgCra2.style.border = '3px solid white';
    imgIop2.style.border = 'none';
    imgXel2.style.border = 'none';
    imgEni2.style.border = 'none';
    choisirClasseJoueur2(1);
});

// cet effet permet au xel de s'agrandire et rétrécire au passage de la souris 
imgXel2.addEventListener('mouseenter', () => {
    imgXel2.style.transition = 'transform 0.3s ease-in-out';
    imgXel2.style.transform = 'scale(1.2)';
    imgXel2.style.cursor = 'pointer';
});

imgXel2.addEventListener('mouseleave', () => {
    imgXel2.style.transition = 'transform 0.3s ease-in-out'
    imgXel2.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgXel2.addEventListener('click', () => {
    imgXel2.style.border = '3px solid white';
    imgCra2.style.border = 'none';
    imgIop2.style.border = 'none';
    imgEni2.style.border = 'none';
    choisirClasseJoueur2(2);

});

// cet effet permet au eni de s'agrandire et rétrécire au passage de la souris 
imgEni2.addEventListener('mouseenter', () => {
    imgEni2.style.transition = 'transform 0.3s ease-in-out';
    imgEni2.style.transform = 'scale(1.2)';
    imgEni2.style.cursor = 'pointer';
});

imgEni2.addEventListener('mouseleave', () => {
    imgEni2.style.transition = 'transform 0.3s ease-in-out'
    imgEni2.style.transform = 'scale(1)';
});

// cet effet permet au iop de mettre une bordure si il est selectionné et de la desactivé si on click sur un autre personnage
imgEni2.addEventListener('click', () => {
    imgEni2.style.border = '3px solid white';
    imgCra2.style.border = 'none';
    imgXel2.style.border = 'none';
    imgIop2.style.border = 'none';
    choisirClasseJoueur2(3);
});

function choisirClasseJoueur2(index) {
    choixJ2 = tab2[index]
};


// Sélection des images du joueur 1
const imgIopP1 = document.querySelector('.imgIopP1');
const imgCraP1 = document.querySelector('.imgCraP1');
const imgXelP1 = document.querySelector('.imgXelP1');
const imgEniP1 = document.querySelector('.imgEniP1');

// Sélection des images du joueur 2
const imgIopP2 = document.querySelector('.imgIopP2');
const imgCraP2 = document.querySelector('.imgCraP2');
const imgXelP2 = document.querySelector('.imgXelP2');
const imgEniP2 = document.querySelector('.imgEniP2');

function startAnimation(parentElement, duration) {
    // Vérifier si l'élément d'animation existe déjà
    const existingAnimationDiv = parentElement.querySelector('.animation-div');
    if (existingAnimationDiv) {
        parentElement.removeChild(existingAnimationDiv); // Supprimer l'élément existant
    }

    // Créer un nouvel élément d'animation
    const animationDiv = document.createElement('div');
    animationDiv.classList.add('animation-div'); // Ajouter une classe pour référence future
    parentElement.appendChild(animationDiv);
    animationDiv.textContent = "C'est à ton tour!";
    animationDiv.style.color = 'white';
    animationDiv.style.backgroundColor = 'transparent';
    animationDiv.style.position = 'absolute';
    animationDiv.style.bottom = '90%';
    animationDiv.style.fontSize = '4rem';
    const timingFunction = 'cubic-bezier(0.1, 0, 0.0, 1)';
    animationDiv.animate([
        { left: '100%' }, // Départ de la droite de l'écran
        { left: '14%' }   // Arrêt au milieu de l'écran
    ], {
        duration: duration,   // Durée de l'animation en millisecondes
        easing: timingFunction, // Fonction d'interpolation
        fill: 'forwards'  // Garde l'état final de l'animation après la fin
    });
}



startGameButton.addEventListener('click', () => {
    if (choixJ2 == null) {
        alert("Le joueur 2 doit choisir une classe avant de continuer.");
    } else {
        console.log("Classe choisie par le joueur 2 :", choixJ2);

        // Afficher l'écran de combat
        pageSelection2.style.display = 'none';
        phaseDeCombat.style.display = 'flex';
        startAnimation(phaseDeCombat, 1500); // Démarrer l'animation



        // Cacher toutes les images sauf celle sélectionnée par le joueur 1
        switch (choixJ1.nom) {
            case "Iop":
                imgIopP1.style.display = 'block';
                imgIopP1.style.animation = 'bouger-haut-bas 2s infinite'; // Ajout de l'animation

                break;
            case "Cra":
                imgCraP1.style.display = 'block';
                imgCraP1.style.animation = 'bouger-haut-bas 2s infinite'; // Ajout de l'animation

                break;
            case "Xel":
                imgXelP1.style.display = 'block';
                imgXelP1.style.animation = 'bouger-haut-bas 2s infinite'; // Ajout de l'animation

                break;
            case "Eni":
                imgEniP1.style.display = 'block';
                imgEniP1.style.animation = 'bouger-haut-bas 2s infinite'; // Ajout de l'animation

                break;
            default:
                break;
        }
    }

    const caracteristiquesP1 = document.querySelector('.caracteristiquesP1');
    const paragrapheNomClasseJ1 = document.createElement('p');
    caracteristiquesP1.appendChild(paragrapheNomClasseJ1);
    paragrapheNomClasseJ1.textContent = "Classe: " + choixJ1.nom;

    const buttonAtkJ1 = document.createElement("button");
    caracteristiquesP1.appendChild(buttonAtkJ1);
    buttonAtkJ1.textContent = "Atk: " + choixJ1.atk;
    buttonAtkJ1.style.backgroundColor = "black";
    buttonAtkJ1.style.width = "200px";
    buttonAtkJ1.style.height = "50px";
    buttonAtkJ1.style.border = "1px solid white";
    buttonAtkJ1.style.color = "white";
    buttonAtkJ1.style.textAlign = "center";
    buttonAtkJ1.style.fontSize = "1.2rem";
    buttonAtkJ1.style.marginBottom = '10px';
    buttonAtkJ1.style.marginTop = '10px';


    const barrePdvJ1 = document.createElement('div');
    caracteristiquesP1.appendChild(barrePdvJ1);
    barrePdvJ1.textContent = "Pdv: " + choixJ1.pointDeVie;
    barrePdvJ1.style.width = "400px";
    barrePdvJ1.style.height = "50px";
    barrePdvJ1.style.border = "1px solid white";
    barrePdvJ1.style.color = "white";
    barrePdvJ1.style.textAlign = "center";
    barrePdvJ1.style.zIndex = "101";


    const barrePdvModulableJ1 = document.createElement('div');
    document.body.appendChild(barrePdvModulableJ1); // Ajoute barrePdvModulableJ2 au body ou à son parent direct
    barrePdvModulableJ1.style.background = 'red';
    barrePdvModulableJ1.style.width = "400px";
    barrePdvModulableJ1.style.height = "50px";
    barrePdvModulableJ1.style.position = 'absolute';
    barrePdvModulableJ1.style.top = '87.5%';
    barrePdvModulableJ1.style.left = '14.6%';
    barrePdvModulableJ1.style.zIndex = '100';

    function startAnimationJ1(parentElement, duration) {
        // Vérifier si l'élément d'animation existe déjà
        const existingAnimationDiv = parentElement.querySelector('.animation-div');
        if (existingAnimationDiv) {
            parentElement.removeChild(existingAnimationDiv); // Supprimer l'élément existant
        }

        // Créer un nouvel élément d'animation
        const animationDiv = document.createElement('div');
        animationDiv.classList.add('animation-div'); // Ajouter une classe pour référence future
        parentElement.appendChild(animationDiv);
        animationDiv.textContent = "C'est à ton tour!";
        animationDiv.style.backgroundColor = 'transparent';
        animationDiv.style.color = 'white';
        animationDiv.style.position = 'absolute';
        animationDiv.style.bottom = '90%';
        animationDiv.style.fontSize = '4rem';
        const timingFunction = 'cubic-bezier(0.1, 0, 0.0, 1)';
        animationDiv.animate([
            { left: '100%' },
            { left: '14%' }
        ], {
            duration: duration,   // Durée de l'animation en millisecondes
            easing: timingFunction, // Fonction d'interpolation
            fill: 'forwards'  // Garde l'état final de l'animation après la fin
        });
    }



    let tourDuJoueur1 = true;




    buttonAtkJ1.addEventListener('click', () => {
        if (tourDuJoueur1) {

            // Vérifier si le joueur 1 a des points de vie restants
            if (choixJ2.pointDeVie > 0) {
                // Réduire les points de vie du joueur 1 en fonction de l'attaque du joueur 2

                choixJ2.pointDeVie += choixJ1.atk;
                // Mettez à jour la barre de vie du joueur 2
                barrePdvJ2.textContent = "Pdv: " + choixJ2.pointDeVie;
                barrePdvModulableJ2.style.width = choixJ2.pointDeVie - choixJ1.atk;

                // Vérifier si le joueur 1 est vaincu
                if (choixJ2.pointDeVie <= 0) {
                    alert("Le joueur 2 a été vaincu !");
                } else {
                    console.log("Points de vie restants du joueur 2 :", choixJ2.pointDeVie);
                }

                // Passer le tour au joueur 1
                tourDuJoueur1 = false;
                tourDuJoueur2 = false;
                startAnimationJ2(phaseDeCombat, 1500); // Démarrer l'animation


                imgIopP1.style.animation = 'none'; // Stop de l'animation
                imgCraP1.style.animation = 'none'; // Stop de l'animation
                imgXelP1.style.animation = 'none'; // Stop de l'animation
                imgEniP1.style.animation = 'none'; // Stop de l'animation


                imgIopP2.style.animation = 'bouger-haut-bas 2s infinite'; // activation de l'animation pour le J2
                imgCraP2.style.animation = 'bouger-haut-bas 2s infinite'; // activation de l'animation pour le J2
                imgXelP2.style.animation = 'bouger-haut-bas 2s infinite'; // activation de l'animation pour le J2
                imgEniP2.style.animation = 'bouger-haut-bas 2s infinite'; // activation de l'animation pour le J2
            }
        }
    });


    switch (choixJ2.nom) {
        case "Iop":
            imgIopP2.style.display = 'block';
            break;
        case "Cra":
            imgCraP2.style.display = 'block';
            break;
        case "Xel":
            imgXelP2.style.display = 'block';
            break;
        case "Eni":
            imgEniP2.style.display = 'block';
            break;
        default:
            break;
    }

    const caracteristiquesP2 = document.querySelector('.caracteristiquesP2');


    const paragrapheNomClasseJ2 = document.createElement('p');
    caracteristiquesP2.appendChild(paragrapheNomClasseJ2);
    paragrapheNomClasseJ2.textContent = "Classe: " + choixJ2.nom;

    const buttonAtkJ2 = document.createElement("button");
    caracteristiquesP2.appendChild(buttonAtkJ2);
    buttonAtkJ2.textContent = "Atk: " + choixJ2.atk;
    buttonAtkJ2.style.backgroundColor = "black";
    buttonAtkJ2.style.width = "200px";
    buttonAtkJ2.style.height = "50px";
    buttonAtkJ2.style.border = "1px solid white";
    buttonAtkJ2.style.color = "white";
    buttonAtkJ2.style.textAlign = "center";
    buttonAtkJ2.style.fontSize = "1.2rem";
    buttonAtkJ2.style.marginBottom = '10px';
    buttonAtkJ2.style.marginTop = '10px';


    const barrePdvJ2 = document.createElement('div');
    caracteristiquesP2.appendChild(barrePdvJ2);
    barrePdvJ2.textContent = "Pdv: " + choixJ2.pointDeVie;
    barrePdvJ2.style.width = "400px";
    barrePdvJ2.style.height = "50px";
    barrePdvJ2.style.border = "1px solid white";
    barrePdvJ2.style.color = "white";
    barrePdvJ2.style.zIndex = "101";
    barrePdvJ2.style.textAlign = "center";

    const barrePdvModulableJ2 = document.createElement('div');
    document.body.appendChild(barrePdvModulableJ2); // Ajoute barrePdvModulableJ2 au body ou à son parent direct
    barrePdvModulableJ2.style.background = 'red';
    barrePdvModulableJ2.style.width = "400px";
    barrePdvModulableJ2.style.height = "50px";
    barrePdvModulableJ2.style.position = 'absolute';
    barrePdvModulableJ2.style.top = '87.5%';
    barrePdvModulableJ2.style.left = '64.6%';
    barrePdvModulableJ2.style.zIndex = '100';







    function startAnimationJ2(parentElement, duration) {
        // Vérifier si l'élément d'animation existe déjà
        const existingAnimationDiv = parentElement.querySelector('.animation-div');
        if (existingAnimationDiv) {
            parentElement.removeChild(existingAnimationDiv); // Supprimer l'élément existant
        }

        // Créer un nouvel élément d'animation
        const animationDiv = document.createElement('div');
        animationDiv.classList.add('animation-div'); // Ajouter une classe pour référence future
        parentElement.appendChild(animationDiv);
        animationDiv.textContent = "C'est à ton tour!";
        animationDiv.style.backgroundColor = 'transparent';
        animationDiv.style.color = 'white';
        animationDiv.style.position = 'absolute';
        animationDiv.style.bottom = '90%';
        animationDiv.style.fontSize = '4rem';
        const timingFunction = 'cubic-bezier(0.1, 0, 0.0, 1)';
        animationDiv.animate([
            { right: '100%' }, // Départ de la droite de l'écran
            { right: '14%' }   // Arrêt au milieu de l'écran
        ], {
            duration: duration,   // Durée de l'animation en millisecondes
            easing: timingFunction, // Fonction d'interpolation
            fill: 'forwards'  // Garde l'état final de l'animation après la fin
        });
    }

    let tourDuJoueur2 = false;


    buttonAtkJ2.addEventListener('click', () => {
        if (!tourDuJoueur2) { // Vérifiez si c'est bien le tour du joueur 2
            // Vérifier si le joueur 2 a des points de vie restants

            if (choixJ1.pointDeVie > 0) {
                // Réduire les points de vie du joueur 2 en fonction de l'attaque du joueur 1
                choixJ1.pointDeVie += choixJ2.atk;

                // Mettez à jour la barre de vie du joueur 1
                barrePdvJ1.textContent = "Pdv: " + choixJ1.pointDeVie;
                barrePdvModulableJ1.style.width = choixJ1.pointDeVie - choixJ2.atk;


                // Vérifier si le joueur 1 est vaincu
                if (choixJ1.pointDeVie <= 0) {
                    alert("Le joueur 1 a été vaincu !");
                } else {
                    console.log("Points de vie restants du joueur 1 :", choixJ1.pointDeVie);
                }

                // Passer le tour au joueur 1
                tourDuJoueur2 = true;
                tourDuJoueur1 = true; // Mettez à jour le tour du joueur 1 à la fin du tour du joueur 2
                startAnimationJ1(phaseDeCombat, 1500); // Démarrer l'animation


                imgIopP1.style.animation = 'bouger-haut-bas 2s infinite'; // Stop de l'animation
                imgCraP1.style.animation = 'bouger-haut-bas 2s infinite'; // Stop de l'animation
                imgXelP1.style.animation = 'bouger-haut-bas 2s infinite'; // Stop de l'animation
                imgEniP1.style.animation = 'bouger-haut-bas 2s infinite'; // Stop de l'animation

                imgIopP2.style.animation = 'none'; // activation de l'animation pour le J1
                imgCraP2.style.animation = 'none'; // activation de l'animation pour le J1
                imgXelP2.style.animation = 'none'; // activation de l'animation pour le J1
                imgEniP2.style.animation = 'none'; // activation de l'animation pour le J1
            }
        }
    });
});

