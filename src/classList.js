// ** addEventListener - classList.add() - classList.remove() - classList.toggle()
// En CSS on crée une classe maCouleur (vous modifiez ce que vous voulez)

// TODO 1: récupérer le titre dans une variable leTitre
const leTitre = document.querySelector("#monTitre");
// TODO 2: récupérer tous les liens dans une variable lesLiens
const lesLiens = document.querySelectorAll("a");

if ((leTitre !== null) && (lesLiens.length === 3)) {
  // TODO 3-1: Sur le 1er lien placer un addEventListener qui écoute le "click" et éxecute une fonction
  lesLiens[0].addEventListener("click", (evt) => {
    evt.preventDefault();
    // TODO 3-2: Dans cette fonction on ajoute la classe "maCouleur" sur titre
    leTitre.classList.add("maCouleur");
  });

  // TODO 4-1: Sur le 2e lien placer un addEventListener qui écoute le "click" et éxecute une fonction
  lesLiens[1].addEventListener("click", (evt) => {
    evt.preventDefault();
    // TODO 4-2: Dans cette fonction on supprime la classe "maCouleur" sur titre
    leTitre.classList.remove("maCouleur");
  });

  // TODO 4-1: Sur le 3e lien placer un addEventListener qui écoute le "click" et éxecute une fonction
  lesLiens[2].addEventListener("click", (evt) => {
    evt.preventDefault();
    // TODO 4-2: Dans cette fonction on toggle la classe "maCouleur" sur titre
    leTitre.classList.toggle("maCouleur");
  });
}
