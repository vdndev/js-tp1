// ** addEventListener - "keyup" - disabled - true - false - value - length

// TODO 1: récupérer le textarea dans une variable txt
const txt = document.querySelector("#area");
// TODO 2: récupérer le button dans une variable btn
const btn = document.querySelector("button");

if ((txt !== null) && (btn !== null)) {
  // TODO 3-1: Sur txt placer un addEventListener qui écoute les touches clavier et éxecute une fonction
  txt.addEventListener("input", (evt) => {
    // TODO 3-2: Dans cette fonction, si ce qu'on tape dans l'input dépasse 5 caractères alors on désactive le button
    if (evt.target.value.length > 5) {
      btn.disabled = true;
    }
  });
}
