// ** mini éditeur de texte - addEventListener - keyup - innerHTML

// TODO 1: récupérer le textarea dans une variable monTxt
const monTxt = document.querySelector("textarea");
// TODO 2: récupérer la div dans une variable rendu
const rendu = document.querySelector("div");

if ((monTxt !== null) && (rendu !== null)) {
  // TODO 3-1: sur monTxt on place un addEventListener qui surveille le clavier et qui exécute une fonction
  monTxt.addEventListener("input", (evt) => {
    // TODO 3-2: Dans cette fonction, au innerHTML de rendu on assigne la VALEUR contenue dans monTxt
    rendu.innerHTML = evt.target.value;
  });
}
