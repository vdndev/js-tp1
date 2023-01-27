// ** addEventListener - "mouseout" - display
// TODO: EN CSS le titre H1 à un display à none

// TODO 1: Dans une variable monTitre, récupérer tous le titre h1
const monTitre = document.querySelectorAll("h1");

if (monTitre.length > 0) {
  // TODO 2: Sur document, placer un addEventListener qui écoute "mouseout" et qui execute une fonction
  document.addEventListener("mouseout", () => {
    // TODO 3: dans cette fonction, on va modifier dans le style de monTitre le display que l'on met à "block"
    monTitre.forEach(titre => titre.style.display = "block");
  });
}
