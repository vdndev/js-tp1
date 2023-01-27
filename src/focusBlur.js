// ** addEventListener - focus - blur

// TODO 1: récupérer l'input dans une variable leInput
const leInput = document.querySelector("input");

if (leInput !== null) {
  // TODO 2-1: sur leInput, utiliser addEventListener pour surveiller "focus"
  leInput.addEventListener("focus", (evt) => {
    // TODO 2-2:et execute une fonction qui modif la bg color de leInput en (couleur au choix)
    leInput.style.backgroundColor = "#FF0000";
  });

  // TODO 3-1: sur leInput, utiliser addEventListener pour surveiller "blur"
  leInput.addEventListener("blur", (evt) => {
    // TODO 3-2: et execute une fonction qui modif la bg color de leInput en blanc ou transparent
    leInput.style.backgroundColor = "#FFFFFF";
  });
}
