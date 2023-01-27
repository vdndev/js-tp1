// ** requestAnimationFrame() - function - offSet / client Height width - left - top

// TODO 1: récupérer le titre h1 dans une variable elTitro
const elTitro = document.querySelector("h1");
// TODO 2: récupérer la div dans une variable leCadre
const leCadre = document.querySelector("div");

// Placés ici pour les rendre accessibles
let hauteurCadre = 0;
let largeurCadre = 0;

// TODO 6: créer une variable positionTop et une variable positionLeft à 0
let positionTop = 0;
let positionLeft = 0;
// TODO 7: créer une variable vitesseVerticale et une variable vitesseHorizontale à -2
let vitesseVerticale = -2;
let vitesseHorizontale = -2;

if ((elTitro !== null) && (leCadre !== null)) {
  // TODO 3: Stocker la propriété clientHeight de leCadre dans une variable hauteurCadre
  hauteurCadre = leCadre.clientHeight;
  // TODO 4: Stocker la propriété clientWidth de leCadre dans une variable largeurCadre
  largeurCadre = leCadre.clientWidth;

  // TODO 5: modifier dans le style de elTitro la position en "relative"
  elTitro.style.position = "relative";

  // TODO 8: créer une fonction monAnim()
  function monAnim() {
    if (positionTop == 0) {
      // TODO 8-2: Dans monAnim(), SI positionTop égal 0 alors on multiplie vitesseVerticale par elle même -1
      vitesseVerticale *= -1;
    } else if (positionTop == (hauteurCadre - elTitro.offsetHeight)) {
      // TODO 8-3: SINON SI positionTop égal hauteurCadre moins le offSetHeight de elTitro alors on multiplie vitesseVerticale par elle même -1
      vitesseVerticale *= -1;
    }

    if (positionLeft == 0) {
      // TODO 8-4: SI positionLeft égal 0 alors on multiplie vitesseHorizontale par elle même -1
      vitesseHorizontale *= -1;
    } else if (positionLeft == (largeurCadre - elTitro.offsetWidth)) {
      // TODO 8-5: SINON SI positionLeft égal largeurCadre moins le offSetWidth de elTitro alors on multiplie vitesseHorizontale par elle même -1
      vitesseHorizontale *= -1;
    }

    // TODO 9: Ensuite dans positionTop on cumule la vitesseVerticale
    positionTop += vitesseVerticale;
    // TODO 10: Dans positionLeft on cumule la vitesseHorizontale
    positionLeft += vitesseHorizontale;

    // TODO 11: Dans le style de elTitro on assigne à top, la positionTop en "px"
    elTitro.style.top = positionTop + "px";
    // TODO 12: Dans le style de elTitro on assigne à left, la positionLeft en "px"
    elTitro.style.left = positionLeft + "px";

    // TODO 13: on appelle la fonction requestAnimationFrame() en lui passant en param monAnim
    requestAnimationFrame(monAnim);
  }

  // TODO 14: en dehors de la fonction monAnim(), on appelle la fonction requestAnimationFrame() en lui passant en param monAnim pour créer une boucle infinie
  requestAnimationFrame(monAnim);
}
