console.log("Le script est chargé !");

const themeButton = document.querySelector('#bouton1');

if (themeButton) {  
    themeButton.addEventListener('click', () => {
        themeButton.classList.toggle('vert');
    });
}

//---------------------------------------------------------

const themeButton2 = document.querySelector('#bouton2');

if (themeButton2) {  
    themeButton2.addEventListener('click', () => {
        themeButton2.classList.toggle('rouge');
    });
}

//---------------------------------------------------------

const themeButton3 = document.querySelector('#bouton3');

if (themeButton3) {  
    themeButton3.addEventListener('click', () => {
        themeButton3.classList.toggle('rouge');
    });
}